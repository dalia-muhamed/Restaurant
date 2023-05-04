import { Component, Output } from '@angular/core';
import { Recipe } from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: 'recipes.component.html',
  styleUrls: ['recipes.component.css'],
})
export class RecipesComponent {
  recipes!: Recipe;
  recipesFun(recipe: Recipe) {
    this.recipes = recipe;
    console.log(this.recipes);
  }
}
