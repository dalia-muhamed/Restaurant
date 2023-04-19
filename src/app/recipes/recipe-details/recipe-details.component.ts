import { Component, Input } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'recipe-details',
  templateUrl: 'recipe-details.component.html',
  styleUrls: ['recipe-details.component.css'],
})
export class RecipeDetailsComponent {
  @Input() recipe!: Recipe;

  constructor() {
    console.log(this.recipe);
  }
}
