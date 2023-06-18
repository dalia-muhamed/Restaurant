import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipes.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/';
@Injectable()
export class RecipeService {
  changedRecipes = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(
      'kosa',
      1,
      'kosa desc',
      'https://www.thespruceeats.com/thmb/PQtsZXCGAWhIlVZLE8aZnm-apvs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/basic-congee-recipes-4065244-hero-01-5cf81547c34d4520be10bb57c6cda902.jpg',
      [new Ingredient('Meat', 1), new Ingredient('fires', 20)]
    ),
    new Recipe(
      'pasta',
      2,
      'pasta desc',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/leek-pea-watercress-soup-7733968.jpg',
      [new Ingredient('bread', 10), new Ingredient('Milk', 2)]
    ),
  ];
  constructor(private slService: ShoppingListService) {}
  getRecipe(id: number) {
    return this.recipes[id];
  }
  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientToShopping(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    console.log(this.recipes);
    this.changedRecipes.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.changedRecipes.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.changedRecipes.next(this.recipes.slice());
  }
}
