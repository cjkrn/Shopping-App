import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable({
    providedIn: 'root',
})

export class ShoppingListService{

    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomato', 10),
      ] ;
      
    constructor(){}

    getIngredients(){
        return this.ingredients.slice();
    }
    addIngredients(newIngredient){
        this.ingredients.push(newIngredient)
    }

}