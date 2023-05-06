import { Component , EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // Storing Recipe's Module datatype in recipes var. with name, desc, imagePath 
  // and each instance will have Recipe's object

  // Sending this recipe to Recipe Component
  recipes: Recipe[];

  constructor(
    private recipeService: RecipeService,
  ){}

  ngOnInit(){
    this.recipes = this.recipeService.getRecipes();
  }


}
