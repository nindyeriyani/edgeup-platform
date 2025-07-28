from fastapi import APIRouter, HTTPException, Depends
from api import schemas 
from vektorisasi_dan_mapping.recc_engine import recommend_jobs_and_courses
from api.dependencies import get_job_profiles, get_all_courses

router = APIRouter()

@router.post(
    "/recommend", 
    response_model=schemas.RecommendationResponse,
    tags=["Recommendations"],
    summary="Get Job and Course Recommendations"
)
def get_recommendations(
    user_input: schemas.UserInput,
    job_role_profiles: dict = Depends(get_job_profiles),
    all_courses_data: list = Depends(get_all_courses)
):
    """
    Accepts user preferences and returns a tailored list of recommended
    job roles and educational courses.

    - **topic_tags**: A list of technical or business topics of interest.
    - **learning_path**: A list of desired career tracks or learning paths.
    - **proficiency_level**: The user's current skill level.
    """
    if not user_input.topic_tags and not user_input.learning_paths:
        raise HTTPException(
            status_code=400,
            detail="Input is insufficient. Please provide at least one topic_tag or learning_path."
        )

    recommendations = recommend_jobs_and_courses(
        user_topic_tags=user_input.topic_tags,
        user_learning_paths=user_input.learning_paths,
        user_proficiency_level=user_input.proficiency_level,
        job_role_profiles=job_role_profiles,
        all_courses_data=all_courses_data
    )

    return recommendations
