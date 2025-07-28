from pydantic import BaseModel
class RequestBody(BaseModel):
    user_message: str
    