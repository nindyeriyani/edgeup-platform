import pandas as pd
from sentence_transformers import SentenceTransformer, util
import torch
import json
import os
import ast 

# Load the Sentence-BERT model. Using a pre-trained model for semantic similarity.
# 'all-MiniLM-L6-v2' is a good balance of speed and performance.
print("Loading SentenceTransformer model...")
model = SentenceTransformer('all-MiniLM-L6-v2')
print("Model loaded successfully.")


def safe_literal_eval(val):
    # Return empty list for NaN or empty/whitespace-only strings
    if pd.isna(val) or not str(val).strip():
        return []
    
    text = str(val).strip()
    
    try:
        #evaluate as a Python literal (e.g., "['tag1', 'tag2']")
        result = ast.literal_eval(text)
        # if list, return it directly
        if isinstance(result, list):
            return result
        # (e.g., a single string or number), wrap it in a list
        else:
            return [str(result)]
    except (ValueError, SyntaxError):
        # (e.g., a plain string "Data, AI"),
        # treat the whole string as a single tag to avoid incorrect splitting.
        return [text]

def load_and_prepare_data(job_path, course_path):
    """
    Args:
        job_path (str): The file path for the processed jobs CSV.
        course_path (str): The file path for the processed courses CSV.

    Returns:
        tuple: A tuple containing two pandas DataFrames (job_df, course_df).
    """
    print(f"Loading data from {job_path} and {course_path}...")
    
    job_df = pd.read_csv(job_path)
    course_df = pd.read_csv(course_path)

    # validasi
    required_job_cols = ['job_title', 'processed_terms']
    required_course_cols = ['title', 'processed_terms', 'topic_tags', 'learning_path']
    
    assert all(col in job_df.columns for col in required_job_cols), \
        f"Job data is missing one of the required columns: {required_job_cols}"
    assert all(col in course_df.columns for col in required_course_cols), \
        f"Course data is missing one of the required columns: {required_course_cols}"

    # Convert 'processed_terms' to lists
    print("Preparing text data for embedding...")
    job_df['text_for_embedding'] = job_df['processed_terms'].apply(
        lambda x: ' '.join(safe_literal_eval(x))
    )
    course_df['text_for_embedding'] = course_df['processed_terms'].apply(
        lambda x: ' '.join(safe_literal_eval(x))
    )

    job_df = job_df[job_df['text_for_embedding'] != ''].reset_index(drop=True)
    course_df = course_df[course_df['text_for_embedding'] != ''].reset_index(drop=True)
    
    print("Data loading and preparation complete.")
    return job_df, course_df


def compute_embeddings(text_list, batch_size=32):
    """
    Args:
        text_list (list): A list of strings to be encoded.
        batch_size (int): The batch size for the model encoding.

    Returns:
        torch.Tensor: A tensor containing the embeddings.
    """
    return model.encode(text_list, convert_to_tensor=True, show_progress_bar=True, batch_size=batch_size)

def map_similarity_and_recommend(job_df, course_df, top_k=3):
    """
    Args:
        job_df (pd.DataFrame): The DataFrame with job data.
        course_df (pd.DataFrame): The DataFrame with course data.
        top_k (int): The number of top courses to recommend for each job.

    Returns:
        list: A list of dictionaries, where each dictionary represents a job
              and its recommended courses.
    """
    # --- Compute Embeddings ---
    print("\nComputing embeddings for jobs...")
    job_embeddings = compute_embeddings(job_df['text_for_embedding'].tolist())
    
    print("\nComputing embeddings for courses...")
    course_embeddings = compute_embeddings(course_df['text_for_embedding'].tolist())

    all_job_recommendations = []

    print(f"\nCalculating similarities and finding top {top_k} recommendations for {len(job_df)} jobs...")
    for i, job_row in job_df.iterrows():
        job_title = job_row['job_title']
        
        # cosine similarity current job and all courses
        cosine_scores = util.cos_sim(job_embeddings[i], course_embeddings)[0]
        
        # top k most similar courses
        top_results = torch.topk(cosine_scores, k=min(top_k, len(course_df)))

        # aggregate recommendations and metadata 
        recommended_courses_list = []
        all_topic_tags = set()
        all_learning_paths = set()

        for score, idx in zip(top_results[0], top_results[1]):
            # Convert the tensor index 'idx' to a Python integer using .item()
            course_index = idx.item()
            course_details = course_df.iloc[course_index]
            
            # course details yang diambil
            recommended_courses_list.append({
                'course_name': course_details['title'],
                'score': score.item(),
                'level': course_details['level'],
                'url': course_details['course_url'],
            })

            # Parse and add topic tags and learning paths
            tags = safe_literal_eval(course_details['topic_tags'])
            paths = safe_literal_eval(course_details['learning_path'])
            all_topic_tags.update(tags)
            all_learning_paths.update(paths)

        # format output
        job_recommendation = {
            'job_title': job_title,
            'all_topic_tags_forthisrole': ", ".join(sorted(list(all_topic_tags))),
            'all_learning_path_forthisrole': ", ".join(sorted(list(all_learning_paths))),
            'recommended_courses': recommended_courses_list
        }
        all_job_recommendations.append(job_recommendation)

        # mengecek progress
        if (i + 1) % 100 == 0:
            print(f"Processed {i + 1}/{len(job_df)} jobs...")

    print("Similarity mapping complete.")
    return all_job_recommendations


if __name__ == "__main__":
    BASE_DIR = os.path.dirname(__file__)
    JOB_DATA_PATH = os.path.join(BASE_DIR, '../preprocessing/preprocessed_data/processed_techjobs_Jul2025.csv')
    COURSE_DATA_PATH = os.path.join(BASE_DIR, '../preprocessing/preprocessed_data/processed_dicoding_courses.csv')
    OUTPUT_JSON_PATH = 'job_course_recommendations.json'

    # cek input files exist
    if not os.path.exists(JOB_DATA_PATH) or not os.path.exists(COURSE_DATA_PATH):
        print(f"Error: Make sure '{JOB_DATA_PATH}' and '{COURSE_DATA_PATH}' are in the same directory.")
    else:
  
        jobs_df, courses_df = load_and_prepare_data(JOB_DATA_PATH, COURSE_DATA_PATH)
        
        # map similarity & get recommendations
        recommendations = map_similarity_and_recommend(jobs_df, courses_df, top_k=10)
        
       
        if recommendations:
            print(f"\nSaving recommendations to '{OUTPUT_JSON_PATH}'...")
            with open(OUTPUT_JSON_PATH, 'w', encoding='utf-8') as f:
                json.dump(recommendations, f, indent=2, ensure_ascii=False)
            print("Successfully saved recommendations.")

            # sample of the output
            print("\n--- Sample Recommendation ---")
            print(json.dumps(recommendations[0], indent=2))
        else:
            print("No recommendations were generated. Check your input data.")
