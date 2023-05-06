import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {

  // Getting Data name and amount, from Shopping edit 
  @Input() name: string;
  @Input() amount: number;

  ingredients: Ingredient[];

  constructor(
    private shoppingService: ShoppingListService,
  ) {}

  ngOnInit(){  
    this.ingredients = this.shoppingService.getIngredients()
  }

  // onAddIngredientFromItem(ingredientEvent: Ingredient){
  //   this.ingredients.push(ingredientEvent);
  //   // this.ingredients.push(ingredientEvent);
  // }


}
