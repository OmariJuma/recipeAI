from google import genai
from app.schema.request_body import RequestBody
import os
from dotenv import load_dotenv
load_dotenv()
api_key = os.getenv("GEMINI_API_KEY")
client = genai.Client(
    api_key= api_key
)

def gemini_setup(content):
    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=content
    )
    print(response.text)
    return response.text