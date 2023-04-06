import { Component, OnInit } from '@angular/core';
import { Ingredrient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredrient[] = [
    new Ingredrient('Apple', 5),
    new Ingredrient('Tomato', 10),

  ] ;
  constructor() {}

  ngOnInit(){
    
  }
}
