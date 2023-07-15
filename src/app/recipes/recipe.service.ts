import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes : Recipe[] =[
        new Recipe('Breakfast', 
        'this is a test',
         'https://cdn.stocksnap.io/img-thumbs/960w/yogurt-berry_VTCDCNDPCH.jpg',
         [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 2)
        ]),
        new Recipe('Lunch', 'this is a test', 'https://cdn.stocksnap.io/img-thumbs/960w/food-recipe_G8QICMKLUV.jpg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 2)
        ]
        ),
    ]; 

    constructor(
        private slService: ShoppingListService){
    }

    // To access the recipes form outside 
    getRecipes(){
        return this.recipes.slice(); // Creating a copy of the recipes so that its actual reference can't be accessed
    }

    addIngredientsToShoppingList(ingredients: Ingredient[] ){
        this.slService.addIngredients(ingredients)
    }
}