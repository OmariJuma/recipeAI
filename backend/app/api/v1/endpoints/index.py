from fastapi import APIRouter
from app.config import llm_setup
from app.schema.request_body import RequestBody
from fastapi.responses import StreamingResponse

router = APIRouter()
@router.post("/genai")
async def genai_endpoint(content:RequestBody):
    generator = llm_setup.gemini_setup(content=content.user_message)
    return StreamingResponse(generator, media_type="text/plain")