import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipes.model';

@Component({
  selector: 'recipe-item',
  templateUrl: 'recipe-item.component.html',
  styleUrls: ['recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Output() onSelectedItem = new EventEmitter<Recipe>();
  @Input() recipes!: Recipe[];

  selectedRecipeItem(recipe: Recipe) {
    console.log(this.recipes);

    this.onSelectedItem.emit(recipe);
  }
}
