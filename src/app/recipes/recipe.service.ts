import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";

// @Injectable({
//     providedIn: "root"
// })

export class RecipeService{

    constructor(){

    }
    recipeSelected = new EventEmitter<Recipe>();
    private recipes : Recipe[] =[
        new Recipe('Breakfast', 'this is a test', 'https://cdn.stocksnap.io/img-thumbs/960w/yogurt-berry_VTCDCNDPCH.jpg'),
        new Recipe('Lunch', 'this is a test', 'https://cdn.stocksnap.io/img-thumbs/960w/food-recipe_G8QICMKLUV.jpg'),
    ]; 

    // To access the recipes form outside 
    getRecipes(){
        return this.recipes.slice(); // Creating a copy of the recipes so that its actual reference can't be accessed
    }
}