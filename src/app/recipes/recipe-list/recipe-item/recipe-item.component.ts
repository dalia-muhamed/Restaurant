import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipes.model';

@Component({
  selector: 'recipe-item',
  templateUrl: 'recipe-item.component.html',
  styleUrls: ['recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Output() onSelectedItem = new EventEmitter<Recipe>();
  @Input() recipe!: Recipe;
  selectedRecipeItem() {
    this.onSelectedItem.emit(this.recipe);
  }
}
