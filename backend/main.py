from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.routes import recc 

# Initialize the FastAPI application
app = FastAPI(
    title="Course and Career Recommendation API",
    description="An API that recommends job roles and courses based on user skills and interests.",
    version="1.0.0"
)

# Add CORS middleware (👇 bagian penting untuk izinkan akses dari frontend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # untuk production, sebaiknya ganti ke ['http://localhost:3000'] atau domain frontendmu
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# include recommendation router
app.include_router(recc.router, prefix="/api/v1")

@app.get("/", tags=["Root"])
def read_root():
    """
    Root endpoint to welcome users to the API.
    """
    return {"message": "Welcome to the Course and Career Recommendation API."}
