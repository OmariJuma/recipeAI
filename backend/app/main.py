from app.api.v1.endpoints import index
from fastapi import FastAPI

app = FastAPI(
    title="Resume and Cover Letter Generator",
    description="Backend for LLM Resume and Cover Letter Generator"
)

app.include_router(index.router, prefix="/api/v1")

