import json
import os
import pandas as pd


def load_data(profiles_path, courses_path):
    """
    Args:
        profiles_path (str): Path to the job_role_profiles_v2.json file.
        courses_path (str): Path to the processed_dicoding_courses.csv file.

    Returns:
    A tuple containing:
            - job_role_profiles (dict): The pre-computed profile mapping.
            - all_courses_data (list of dicts): The full dataset of all courses.
    """
    job_role_profiles = {}
    all_courses_data = []

    try:
        with open(profiles_path, 'r', encoding='utf-8') as f:
            job_role_profiles = json.load(f)
        print(f"Successfully loaded {len(job_role_profiles)} job role profiles from '{profiles_path}'.")
    except FileNotFoundError:
        print(f"Error: Job profiles file not found at '{profiles_path}'.")
    except json.JSONDecodeError:
        print(f"Error: Could not decode JSON from '{profiles_path}'.")

    try:
        courses_df = pd.read_csv(courses_path)
        courses_df.rename(columns={'level': 'proficiency_level'}, inplace=True)
        all_courses_data = courses_df.to_dict('records')
        print(f"Successfully loaded {len(all_courses_data)} courses from '{courses_path}'.")
    except FileNotFoundError:
        print(f"Error: Courses file not found at '{courses_path}'.")

    return job_role_profiles, all_courses_data


def recommend_jobs_and_courses(user_topic_tags, user_learning_paths, user_proficiency_level, job_role_profiles, all_courses_data):
    """
    Args:
        user_topic_tags (list): List of topic tags the user is interested in.
        user_learning_paths (list): List of learning paths the user is interested in.
        user_proficiency_level (str): User's proficiency level ('Beginner', 'Intermediate', 'Expert').
        job_role_profiles (dict): The pre-computed JobRole_Profile mapping.
        all_courses_data (list of dicts): Your full dataset of all online courses.

    Returns:
        dict: Contains recommended job roles and a list of courses.
    """
    job_role_scores = {}

    # Scoring Job Roles Based on User Interests
    print("\nScoring job roles based on user preferences...")
    for job_role, profile_data in job_role_profiles.items():
        score = 0
        
        # 1. Topic Tags Similarity (Jaccard Index * 0.6)
        profile_topics = set(profile_data.get("associated_topic_tags", []))
        user_topics = set(user_topic_tags)
        if user_topics and profile_topics:
            intersection = len(user_topics.intersection(profile_topics))
            union = len(user_topics.union(profile_topics))
            if union > 0:
                score += (intersection / union) * 0.6  # Weight topic tags higher

        # 2. Learning Path Similarity (Jaccard Index * 0.4)
        profile_paths = set(profile_data.get("associated_learning_paths", []))
        user_paths = set(user_learning_paths)
        if user_paths and profile_paths:
            intersection = len(user_paths.intersection(profile_paths))
            union = len(user_paths.union(profile_paths))
            if union > 0:
                score += (intersection / union) * 0.4  # Weight learning paths

        job_role_scores[job_role] = score

    sorted_job_roles = sorted(job_role_scores.items(), key=lambda item: item[1], reverse=True)
    
    # Filter for roles with a meaningful score and take the top 5
    recommended_job_roles = [role for role, score in sorted_job_roles if score > 0.1][:5]
    print(f"Top recommended job roles: {recommended_job_roles}")

    # Recommending Courses based on Top Roles and User Proficiency ---
    print(f"Finding courses for proficiency level: '{user_proficiency_level}'...")
    potential_course_names = set()
    for role in recommended_job_roles:
        if role in job_role_profiles:
            for course_info in job_role_profiles[role].get("top_courses_for_role", []):
                potential_course_names.add(course_info["course_name"])

    final_recommended_courses = []
    # iterate through the full course dataset, filter by proficiency
    for course in all_courses_data:
        if course.get("title") in potential_course_names and \
           str(course.get("proficiency_level")).lower() == user_proficiency_level.lower():
            final_recommended_courses.append(course["title"])

    # Return unique courses, limited to the top 10
    final_recommended_courses = list(dict.fromkeys(final_recommended_courses))[:10]

    return {
        "recommended_job_roles": recommended_job_roles,
        "recommended_courses": final_recommended_courses
    }


if __name__ == "__main__":

    BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
    PROFILES_PATH = os.path.join(BASE_DIR, 'job_role_profiles_v2.json')
    COURSES_PATH = os.path.join(BASE_DIR, 'preprocessing', 'preprocessed data', 'processed_dicoding_courses.csv')

    job_profiles, courses_data = load_data(PROFILES_PATH, COURSES_PATH)

    if job_profiles and courses_data:
        # --- Example User Input ---
        # Simulate a user interested in web development and data
        user_inputs = {
            "topic_tags": ["Back End", "Front End", "Data", "Cloud Computing"],
            "learning_paths": ["Back-End", "Front-End Web"],
            "proficiency_level": "Level: Dasar" # "Level: Dasar", "Level:Pemula", "Level: Menengah", "Level: Mahir", "Level: Kompetensi Sertifikasi
        }
        
        print("\n--- Running Recommendation Engine with Sample User Input ---")
        print(f"User Interests: {user_inputs}")

        recommendations = recommend_jobs_and_courses(
            user_topic_tags=user_inputs["topic_tags"],
            user_learning_paths=user_inputs["learning_paths"],
            user_proficiency_level=user_inputs["proficiency_level"],
            job_role_profiles=job_profiles,
            all_courses_data=courses_data
        )

        print("\n--- Final Recommendations ---")
        print(json.dumps(recommendations, indent=2, ensure_ascii=False))