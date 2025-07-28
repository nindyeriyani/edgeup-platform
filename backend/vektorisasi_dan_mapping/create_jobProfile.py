import json
import os
from collections import defaultdict
from sentence_transformers import SentenceTransformer, util
from deep_translator import GoogleTranslator
import torch
import pandas as pd


# 16 master job roles from data exploration
MASTER_JOB_ROLES = [
    "Technical Support Engineer",
    "Data Analyst",
    "Business Analyst",
    "Production/Operations Staff",
    "EDP/IT Support Staff",
    "Product Strategy Staff",
    "Customer Care Associate",
    "Website Administrator",
    "Programmer / Software Developer",
    "Project Administrator",
    "Field Supervisor (Telecommunications)",
    "SAP Functional Consultant",
    "Network Engineer",
    "Solution Specialist",
    "QA Engineer",
    "Strategy Analyst"
]

# sentence-BERT model for semantic similarity matching
print("Loading SentenceTransformer model for role mapping...")
model = SentenceTransformer('all-MiniLM-L6-v2')
# pre-compute embeddings for the master roles for efficiency
master_role_embeddings = model.encode(MASTER_JOB_ROLES, convert_to_tensor=True)
print("Model and master role embeddings loaded.")


def map_title_to_master_role(original_title):
    if not isinstance(original_title, str) or not original_title.strip():
        return "Uncategorized" 

    try:
        # title to English to match against the English master list
        translated_title = GoogleTranslator(source='auto', target='en').translate(original_title)
        if not translated_title:
             return "Uncategorized"
    except Exception as e:
        print(f"Warning: Could not translate title '{original_title}'. Error: {e}. Using original.")
        translated_title = original_title

    # encode the translated title
    title_embedding = model.encode(translated_title, convert_to_tensor=True)
    
    # cosine similarity title and all master roles
    cosine_scores = util.cos_sim(title_embedding, master_role_embeddings)[0]
    
    # find the index of the highest similarity score
    best_match_index = torch.argmax(cosine_scores).item()
    
    return MASTER_JOB_ROLES[best_match_index]



def create_job_role_profiles(input_path):
    """
    Loads recommendation data and aggregates it by standardized job roles
    using the semantic mapping function.
    """
    try:
        with open(input_path, 'r', encoding='utf-8') as f:
            recommendations = json.load(f)
    except FileNotFoundError:
        print(f"Error: Input file not found at '{input_path}'")
        return {}
    except json.JSONDecodeError:
        print(f"Error: Could not decode JSON from '{input_path}'. File might be empty or corrupt.")
        return {}

    job_profiles = defaultdict(lambda: {
        "associated_topic_tags": set(),
        "associated_learning_paths": set(),
        "top_courses_for_role": {}
    })

    print(f"\nProcessing and mapping {len(recommendations)} job entries to master roles...")
    for i, entry in enumerate(recommendations):
        original_title = entry.get('job_title')
        if not original_title:
            continue

        # original title to 16 master roles
        standardized_role = map_title_to_master_role(original_title)
        
        # aggregate tags, paths, and courses under the standardized role
        tags_str = entry.get('all_topic_tags_forthisrole', '')
        if tags_str:
            tags = {tag.strip() for tag in tags_str.split(',') if tag.strip()}
            job_profiles[standardized_role]["associated_topic_tags"].update(tags)
            
        paths_str = entry.get('all_learning_path_forthisrole', '')
        if paths_str:
            paths = {path.strip() for path in paths_str.split(',') if path.strip()}
            job_profiles[standardized_role]["associated_learning_paths"].update(paths)
            
        for course in entry.get('recommended_courses', []):
            course_name = course.get('course_name')
            score = course.get('score', 0)
            if course_name:
                if course_name not in job_profiles[standardized_role]["top_courses_for_role"] or \
                   score > job_profiles[standardized_role]["top_courses_for_role"][course_name]['score']:
                    level = course.get('level', '')
                    url = course.get('url', '')
                    job_profiles[standardized_role]["top_courses_for_role"][course_name] = {
                        'course_name': course_name,
                        'score': score,
                        'level': level,
                        'url': url
                    }

        if (i + 1) % 50 == 0:
            print(f"Processed {i + 1}/{len(recommendations)} entries...")

    print("\nFinalizing the aggregated profiles...")
    final_profiles = {}
    for role, data in job_profiles.items():
        final_profiles[role] = {
            "associated_topic_tags": sorted(list(data["associated_topic_tags"])),
            "associated_learning_paths": sorted(list(data["associated_learning_paths"])),
            "top_courses_for_role": sorted(
                list(data["top_courses_for_role"].values()), 
                key=lambda x: x['score'], 
                reverse=True
            )
        }
        
    return final_profiles


if __name__ == "__main__":
    INPUT_JSON_PATH = 'job_course_recommendations.json'
    OUTPUT_JSON_PATH = 'job_role_profiles_v2.json'

    if not os.path.exists(INPUT_JSON_PATH):
        print(f"Error: The required input file '{INPUT_JSON_PATH}' was not found.")
        print("Please run text_representation.py first to generate it.")
    else:
        aggregated_profiles = create_job_role_profiles(INPUT_JSON_PATH)
        
        if aggregated_profiles:
            print(f"\nSaving aggregated profiles to '{OUTPUT_JSON_PATH}'...")
            with open(OUTPUT_JSON_PATH, 'w', encoding='utf-8') as f:
                json.dump(aggregated_profiles, f, indent=2, ensure_ascii=False)
            print("Successfully saved job role profiles.")

            print("\n--- Sample Job Role Profile ---")
            sample_role = list(aggregated_profiles.keys())[0]
            print(json.dumps({sample_role: aggregated_profiles[sample_role]}, indent=2, ensure_ascii=False))
        else:
            print("No job role profiles were generated. Check your input data.")
