import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService] // RecipeService is provided by to the whole Recipe component
})
export class RecipesComponent implements OnInit {

  selectedRecipe: Recipe;
  // defaultText = 'Please select a Recipe';
  
  constructor(
    private recipeService: RecipeService,
  ) {}
  ngOnInit(){
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    );
  }

}
