import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  name: string;
  id: number;
  description: string;
  imgPath: string;
  ingredients: Ingredient[];

  constructor(
    name: string,
    id: number,
    desc: string,
    img: string,
    ingredients: Ingredient[]
  ) {
    this.name = name;
    this.id = id;
    this.description = desc;
    this.imgPath = img;
    this.ingredients = ingredients;
  }
}
