import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {FormGroup, FormControl} from "@angular/forms";
import {RecipeService} from '../recipe.service'

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
    console.log(this.receipeForm)
  }

  private initForm(){

    let receipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';

    if(this.editMode){
      const recipe = this.receipeService.getRecipe(this.id);
      receipeName = recipe.name
      recipeImagePath = recipe.imagePath
      recipeDescription = recipe.description

    }

    this.receipeForm = new FormGroup({
      'name': new FormControl(receipeName),
      'imagePath': new FormControl(recipeImagePath),
      'description': new FormControl(recipeDescription)
    });
  }

}
