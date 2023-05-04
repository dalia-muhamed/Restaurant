import { Component, OnInit, Output } from '@angular/core';
import { Recipe } from './recipes.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: 'recipes.component.html',
  styleUrls: ['recipes.component.css'],
  providers: [RecipeService],
})
export class RecipesComponent {
  recipes!: Recipe;
  recipesFun(recipe: Recipe) {
    console.log('recipe' + recipe);
    this.recipes = recipe;
    console.log('recipes' + this.recipes);
  }
}
