import { Component , EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // Storing Recipe's Module datatype in recipes var. with name, desc, imagePath 
  // and each instance will have Recipe's object

  // Sending this recipe to Recipe Component
  @Output() recipeSelectedFromList = new EventEmitter<Recipe>();


  recipes : Recipe[] =[
    new Recipe('Breakfast', 'this is a test', 'https://cdn.stocksnap.io/img-thumbs/960w/yogurt-berry_VTCDCNDPCH.jpg'),
    new Recipe('Lunch', 'this is a test', 'https://cdn.stocksnap.io/img-thumbs/960w/food-recipe_G8QICMKLUV.jpg'),
  ];  
  constructor(){}

  ngOnInit(){

  }

  onRecipeSelected(recipe: Recipe){
    console.log('Recipe selected in List: ', recipe)
    this.recipeSelectedFromList.emit(recipe); 
  }

}
