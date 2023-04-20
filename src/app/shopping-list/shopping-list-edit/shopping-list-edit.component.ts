import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'shopping-list-edit',
  templateUrl: 'shopping-list-edit.component.html',
  styleUrls: ['shopping-list-edit.component.html'],
})
export class ShoppingListEditComponent {
  @Output() eventIngredient = new EventEmitter<Ingredient>();
  newIngredient!: Ingredient;
  addIngred(name: any, amount: any) {
    this.newIngredient = new Ingredient(name.value, amount.value);
    this.eventIngredient.emit(this.newIngredient);
  }
}
