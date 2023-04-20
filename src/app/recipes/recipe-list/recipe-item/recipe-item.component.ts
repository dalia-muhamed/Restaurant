import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipes.model';

@Component({
  selector: 'recipe-item',
  templateUrl: 'recipe-item.component.html',
  styleUrls: ['recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Output() onSelectedItem = new EventEmitter<void>();
  @Input() recipe!: Recipe;

  selectedRecipeItem() {
    console.log(this.recipe);

    this.onSelectedItem.emit();
  }
}
