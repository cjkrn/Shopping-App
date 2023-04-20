import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {

  // Getting Data name and amount, from Shopping edit 
  @Input() name: string;
  @Input() amount: number;

  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 10),

  ] ;
  constructor() {}

  ngOnInit(){
    
  }
  onAddIngredientFromItem(ingredientEvent: Ingredient){
    this.ingredients.push(ingredientEvent);
  }


}
