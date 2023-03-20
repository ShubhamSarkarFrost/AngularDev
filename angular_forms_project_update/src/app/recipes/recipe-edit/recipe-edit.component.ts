import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {FormGroup, FormControl, FormArray, Validators} from "@angular/forms";
import {RecipeService} from '../recipe.service'
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  receipeForm: FormGroup;

  constructor(private route: ActivatedRoute , private receipeService: RecipeService) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }
  onSubmit(){
    // console.log(this.receipeForm)
    //const newReceipe = new Recipe(this.receipeForm.value['name'], this.receipeForm.value['description'], this.receipeForm.value['imagesPath'], this.receipeForm.value['ingredients']);
    if(this.editMode){
      this.receipeService.updateReceipe(this.id, this.receipeForm.value )
    }else{
      this.receipeService.addRecipe(this.receipeForm.value)
    }

  }

  get controls(){
    return (<FormArray>this.receipeForm.get('ingredients')).controls
  }
  onAddIngredient(){
    (<FormArray>this.receipeForm.get('ingredients')).push(
      new FormGroup({
          'name': new FormControl(null, Validators.required),
           'amount': new FormControl(null,[Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])

      }

      )
    )
  }

  private initForm(){

    let receipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if(this.editMode){
      const recipe = this.receipeService.getRecipe(this.id);
      receipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if(recipe['ingredients']){
        for(let ingredient of recipe.ingredients){
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          );
        }
      }

    }

    this.receipeForm = new FormGroup({
      'name': new FormControl(receipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients
    });
  }

}
