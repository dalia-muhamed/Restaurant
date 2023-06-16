import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'shopping-list-edit',
  templateUrl: 'shopping-list-edit.component.html',
  styleUrls: ['shopping-list-edit.component.html'],
})
export class ShoppingListEditComponent {
  newIngredient!: Ingredient;
  @Input() editedIngredient!: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {}
  onAddItem(form: NgForm) {
    const name = form.value.name;
    const amount = form.value.amount;
    this.newIngredient = new Ingredient(name, amount);
    this.shoppingListService.addIngredient(this.newIngredient);
  }
}
