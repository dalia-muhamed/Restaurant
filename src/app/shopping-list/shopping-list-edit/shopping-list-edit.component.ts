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
  // newIngredient: Ingredient = {
  //   name: this.inputName,
  //   amount: this.inputAmount,
  // };

  inputName: any;
  inputAmount: any;
  addIngred(name: any, amount: any) {
    this.inputName = name.value;
    this.inputAmount = amount.value;
    console.log(this.inputName);
    console.log(this.inputAmount);
  }
}
