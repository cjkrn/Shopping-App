import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable({
    providedIn: 'root',
})

export class ShoppingListService{

    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomato', 10),
      ] ;
      
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    constructor(){}

    getIngredients(){
        return this.ingredients.slice();
    }
    addIngredient(newIngredient){
        this.ingredients.push(newIngredient)
        console.log(this.ingredients)
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice())
    }

}