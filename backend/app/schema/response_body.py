from pydantic import BaseModel
from typing import Literal, Optional

class Ingredient(BaseModel):
    name: str
    status: Literal["have", "missing"]
class RecipeResponse(BaseModel):
    recipe_name: str
    description: Optional[str] = ""
    ingredients: list[Ingredient]
    instructions: list[str]
    shopping_list: list[str]
    cooking_tip: str