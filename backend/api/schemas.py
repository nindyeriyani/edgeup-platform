from pydantic import BaseModel, Field
from typing import List

class UserInput(BaseModel):
    """
    Structure for the user input in the request body
    """
    topic_tags: List[str] = Field(
        ..., 
        example=["Back End", "Data", "Cloud Computing"],
        description="A list of topic tags the user is interested in."
    )
    learning_paths: List[str] = Field(
        ..., 
        alias="learning_path", # Allows the input JSON to use "learning_path"
        example=["Back-End", "Data Scientist"],
        description="A list of learning paths the user is interested in."
    )
    proficiency_level: str = Field(
        ..., 
        example="Level: Dasar",
        description="The user's self-reported proficiency level (e.g., 'Level: Dasar', 'Level: Pemula', 'Level: Menengah', 'Level: Mahir', 'Level: Kompetensi Sertifikasi')."
    )

    class Config:
        allow_population_by_field_name = True # Enables using the alias 'learning_path'

class RecommendationResponse(BaseModel):
    """
    Structure for the recommendation output in the response body.
    """
    recommended_job_roles: List[str] = Field(
        ...,
        example=["Programmer / Software Developer", "Technical Support Engineer"],
        description="A list of job roles recommended based on user input."
    )
    recommended_courses: List[str] = Field(
        ...,
        example=["Belajar Fundamental Back-End dengan JavaScript", "Belajar Dasar-Dasar DevOps"],
        description="A list of course titles recommended for the user."
    )