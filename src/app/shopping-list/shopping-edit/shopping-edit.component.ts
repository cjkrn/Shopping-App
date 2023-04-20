import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit  {
  // Sending Out the data for Ingredients ie its name and amount to Shopping List
  @ViewChild('nameInput', {static: false}) nameRef: ElementRef; 
  //passing the ElementRef from the HTML Template
  @ViewChild('amountInput', {static: false}) amountRef: ElementRef;

  // Event Emitter of type definition as a JS Object with 2 keys name and amount:-
  // to listen for new Added Ingredients
  
  //Method 1:- 
  //ingredientAdded =  new EventEmitter<{name: string, amount: number}>();
  // OR just import Ingredient Model from Shared Component 
  //Method 2:- 
  @Output() ingredientAdded =  new EventEmitter<Ingredient>(); // add @Output so that we can listen from

  
  AddIngredients(event: any) {
    // By calling preventDefault() on the event object, 
    // you prevent the form from being submitted and the default page navigation (ie to go to http://localhost:5000/?#)
    // behavior from occurring, which leads to redirect to Recipes 
    event.preventDefault();

    // Use const instead of let, as we dont change its Value more than once 
    const ingName = this.nameRef.nativeElement.value;
    const ingAmount = this.amountRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount)
    this.ingredientAdded.emit(newIngredient);
  }
  constructor() {

  }
  ngOnInit() {
      
  }
}
