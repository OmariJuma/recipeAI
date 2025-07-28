from fastapi import APIRouter
from app.services import generate
from app.core import llm_setup
from app.schema.request_body import RequestBody

router = APIRouter()
@router.post("/genai/")
async def genai_endpoint(content:RequestBody):
    resume = generate.generateResume()
    coverLetter = generate.generateCoverLetter()
    return {llm_setup.gemini_setup(content=content.user_message)}