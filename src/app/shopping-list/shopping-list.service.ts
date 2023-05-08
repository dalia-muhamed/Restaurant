import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { RecipeService } from '../recipes/recipe.service';
// @Injectable()
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 10),
    new Ingredient('Milk', 30),
  ];
  getIngredient() {
    return this.ingredients.slice();
  }
  // constructor(private recipeService: RecipeService) {}
  addIngredient(ingredient: Ingredient) {
    // this.recipeService.sendIngredient.subscribe(
    //   (sentIngredient: Ingredient[]) => {
    //     ingredient: Ingredient = sentIngredient;
    //     console.log('kkkkkkkkk');
    //   }
    // );
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  addIngredients(ingredients: Ingredient[]) {
    // for(let ingerdient of ingredients){
    //   this.addIngredient(ingerdient)
    // }
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
