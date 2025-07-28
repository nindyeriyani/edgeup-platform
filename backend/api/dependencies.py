import pandas as pd
import json
import os
from pathlib import Path 


BASE_DIR = Path(__file__).resolve().parent.parent



PROFILES_PATH = BASE_DIR / 'vektorisasi_dan_mapping' / 'job_role_profiles_v2.json'
COURSES_PATH = BASE_DIR / 'preprocessing' / 'preprocessed_data' / 'processed_dicoding_courses.csv'

def load_data(profiles_path, courses_path):
    job_role_profiles = {}
    all_courses_data = []
    try:
        with open(profiles_path, 'r', encoding='utf-8') as f:
            job_role_profiles = json.load(f)
    except Exception as e:
        # print the full path that failed for easier debugging
        print(f"Error loading job profiles from {profiles_path}: {e}")
    
    try:
        courses_df = pd.read_csv(courses_path)
        courses_df.rename(columns={'level': 'proficiency_level'}, inplace=True)
        all_courses_data = courses_df.to_dict('records')
    except Exception as e:
        # print the full path that failed
        print(f"Error loading courses data from {courses_path}: {e}")
        
    return job_role_profiles, all_courses_data

JOB_ROLE_PROFILES, ALL_COURSES_DATA = load_data(PROFILES_PATH, COURSES_PATH)

# --- Dependency Functions ---
def get_job_profiles():
    return JOB_ROLE_PROFILES

def get_all_courses():
    return ALL_COURSES_DATA
