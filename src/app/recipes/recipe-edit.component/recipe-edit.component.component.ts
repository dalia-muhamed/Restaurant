import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit.component',
  templateUrl: './recipe-edit.component.component.html',
  styleUrls: ['./recipe-edit.component.component.css'],
})
export class RecipeEditComponent implements OnInit {
  editMode = false;
  id!: number;
  recipeForm!: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      console.log(this.editMode);
      this.initForm();
    });
  }

  private initForm() {
    let recipeName = '';
    let recipeImg = '';
    let recipeDescription = '';
    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      console.log(recipe);

      recipeName = recipe.name;
      recipeImg = recipe.imgPath;
      recipeDescription = recipe.description;
    }
    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName),
      imgPath: new FormControl(recipeImg),
      description: new FormControl(recipeDescription),
    });
  }
}
