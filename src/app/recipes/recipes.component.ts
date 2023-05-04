import { Component, Output } from '@angular/core';
import { Recipe } from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: 'recipes.component.html',
  styleUrls: ['recipes.component.css'],
})
export class RecipesComponent {
  recipes!: Recipe;
  // recipes(recipe: Recipe) {
  //   this.newRecipe = recipe;
  //   console.log(this.newRecipe);
  // }
}
