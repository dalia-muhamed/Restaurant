import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'shopping-list-edit',
  templateUrl: 'shopping-list-edit.component.html',
  styleUrls: ['shopping-list-edit.component.html'],
})
export class ShoppingListEditComponent {
  newIngredient!: Ingredient;
  constructor(private shoppingListService: ShoppingListService) {}
  onAddItem(name: any, amount: any) {
    this.newIngredient = new Ingredient(name, amount);
    this.shoppingListService.newIngredient(this.newIngredient);
  }
}
