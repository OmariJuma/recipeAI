from pydantic import BaseModel
from typing import Literal, Optional

class RecipeResponse(BaseModel):
    role: str = "assistant"
    title: str
    description: str
    ingredients: str
    instructions: list[str]
    shoppingList: list[str]
    cookingTip: str