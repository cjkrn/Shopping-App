import { Component , OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  // Storing Recipe's Module datatype in recipes var. with name, desc, imagePath 
  // and each instance will have Recipe's object
  recipes : Recipe[] =[
    new Recipe('Test Recipe', 'this is a test', 'https://cdn.stocksnap.io/img-thumbs/960w/food-recipe_G8QICMKLUV.jpg'),
    new Recipe('Test Recipe', 'this is a test', 'https://cdn.stocksnap.io/img-thumbs/960w/food-recipe_G8QICMKLUV.jpg'),
  ];
  
  constructor(){}

  ngOnInit(){

  }

}
