from google import genai
from app.schema.request_body import RequestBody
import os
from dotenv import load_dotenv
from google.genai import types
from app.config import system_instruction
load_dotenv()
api_key = os.getenv("GEMINI_API_KEY")
client = genai.Client(
    api_key= api_key,
    
)
config = types.GenerateContentConfig(
    system_instruction= system_instruction.INSTRUCTIONS
)

def gemini_setup(content):
   
    response = client.models.generate_content_stream(
        model="gemini-2.5-flash",
        contents=content,
        config=config   
    )
    for chunk in response:
        print(chunk.text)
        yield chunk.text