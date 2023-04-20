import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: 'shopping-list.component.html',
  styleUrls: ['shopping-list.component.css'],
})
export class ShoppingListComponent {
  newIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    console.log(ingredient);
  }
  name!: string;
  amount!: number;
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 10),
    new Ingredient('Milk', 30),
  ];
}
