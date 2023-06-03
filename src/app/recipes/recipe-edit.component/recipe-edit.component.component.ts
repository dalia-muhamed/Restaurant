import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit.component',
  templateUrl: './recipe-edit.component.component.html',
  styleUrls: ['./recipe-edit.component.component.css'],
})
export class RecipeEditComponent implements OnInit {
  editMode = false;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.editMode = +params['id'] != null;
      console.log(this.editMode);
    });
  }
}
