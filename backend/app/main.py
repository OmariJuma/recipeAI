from app.api.v1.endpoints import index
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from dotenv import load_dotenv
load_dotenv()

app = FastAPI(
    title="Recipe AI Generator",
    description="Backend for AI Recipe Generator"
)
frontend_uri=os.getenv("FRONTEND_URI")
# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=[frontend_uri],  # Your Next.js frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
print(frontend_uri)
app.include_router(index.router, prefix="/api/v1")

