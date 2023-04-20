import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit  {
  // getting this Recipe from Outside ie from Recipe list component
  @Input() recipe: Recipe;
  // Sending this selectedRecipe to Recipe list component
  @Output() selectedRecipeFromItem = new EventEmitter<void>();
  constructor(){

  }
  ngOnInit(){
    // console.log(this.recipe);
  }
  onRecipeSelected(){
    console.log(this.selectedRecipeFromItem);
    this.selectedRecipeFromItem.emit();
  }


}
