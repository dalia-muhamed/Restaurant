import { Component, Input } from '@angular/core';
import { Recipe } from '../recipes.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'recipe-details',
  templateUrl: 'recipe-details.component.html',
  styleUrls: ['recipe-details.component.css'],
})
export class RecipeDetailsComponent {
  @Input() recipe!: Recipe;
  constructor(private recipeService: RecipeService) {}
  onAddToShoppingList() {
    this.recipeService.addIngredientToShopping(this.recipe.ingredients);
    console.log(this.recipe.ingredients);
  }
}
