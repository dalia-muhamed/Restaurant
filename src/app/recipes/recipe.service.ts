import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipes.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe(
      'kosa',
      'kosa desc',
      'https://www.thespruceeats.com/thmb/PQtsZXCGAWhIlVZLE8aZnm-apvs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/basic-congee-recipes-4065244-hero-01-5cf81547c34d4520be10bb57c6cda902.jpg',
      [new Ingredient('Meat', 1), new Ingredient('fires', 20)]
    ),
    new Recipe(
      'pasta',
      'pasta desc',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/leek-pea-watercress-soup-7733968.jpg',
      [new Ingredient('bread', 10), new Ingredient('Milk', 2)]
    ),
  ];
  constructor(private slService: ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientToShopping(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
