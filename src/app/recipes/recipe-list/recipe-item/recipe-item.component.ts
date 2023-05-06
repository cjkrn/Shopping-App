import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit  {
  // getting this Recipe from Outside ie from Recipe list component
  @Input() recipe: Recipe;
  // Sending this selectedRecipe to Recipe list component
  // @Output() selectedRecipeFromItem = new EventEmitter<void>();
  constructor(
    private recipeService: RecipeService,
  ){

  }
  ngOnInit(){
    // console.log(this.recipe);
  }
  onRecipeSelected(){
    // console.log(this.selectedRecipeFromItem);
    this.recipeService.recipeSelected.emit(this.recipe)
    // this.selectedRecipeFromItem.emit();
  }


}
