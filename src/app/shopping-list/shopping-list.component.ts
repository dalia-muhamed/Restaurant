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
  igChanged!: Subscription;
  constructor(
    private shoppingListService: ShoppingListService,
    private recipeService: RecipeService
  ) {}
  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredient();
    this.igChanged = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }
  ngOnDestroy() {
    this.igChanged.unsubscribe();
  }
}
