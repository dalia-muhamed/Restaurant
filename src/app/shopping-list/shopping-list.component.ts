import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { RecipeService } from '../recipes/recipe.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-shopping-list',
  templateUrl: 'shopping-list.component.html',
  styleUrls: ['shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  subscription!: Subscription;
  editedIng!: Ingredient;
  constructor(
    private shoppingListService: ShoppingListService,
    private recipeService: RecipeService
  ) {}
  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredient();
    this.subscription = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  onEdit(name: string, amount: number) {
    // console.log(name, amount);
    this.editedIng = new Ingredient(name, amount);
  }
}
