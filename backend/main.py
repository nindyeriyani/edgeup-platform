from fastapi import FastAPI
from api.routes import recc 

# Initialize the FastAPI application
app = FastAPI(
    title="Course and Career Recommendation API",
    description="An API that recommends job roles and courses based on user skills and interests.",
    version="1.0.0"
)

# include recommendation router
# all routes defined in recc.router will be added to the app
app.include_router(recc.router, prefix="/api/v1")

@app.get("/", tags=["Root"])
def read_root():
    """
    Root endpoint to welcome users to the API.
    """
    return {"message": "Welcome to the Course and Career Recommendation API."}

