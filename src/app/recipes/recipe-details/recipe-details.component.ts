import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'recipe-details',
  templateUrl: 'recipe-details.component.html',
  styleUrls: ['recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit {
  // @Input()
  recipe!: Recipe;
  constructor(
    private recipeService: RecipeService,
    private slService: ShoppingListService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let id = +params['id'];

      this.recipe = this.recipeService.getRecipe(id);
    });
  }
  onAddToShoppingList() {
    this.recipeService.addIngredientToShopping(this.recipe.ingredients);
    console.log(this.recipe.ingredients);
  }
}
