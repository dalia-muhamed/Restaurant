import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'recipe-list',
  templateUrl: 'recipe-list.component.html',
  styleUrls: ['recipe-list.component.css'],
  providers: [RecipeService],
})
export class RecipeListComponent implements OnInit {
  recipes!: Recipe[];
  @Output() recipeItem = new EventEmitter<Recipe>();
  constructor(private recipeService: RecipeService) {}
  ngOnInit() {
    this.recipes = this.recipeService.recipes;
  }
  selectedRecipeItem(recipe: Recipe) {
    console.log(recipe);
    this.recipeItem.emit(recipe);
  }
}
