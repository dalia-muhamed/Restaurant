import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  newIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    console.log(ingredient);
  }

  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 10),
    new Ingredient('Milk', 30),
  ];
}
