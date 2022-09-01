import { Component, Input, OnInit } from '@angular/core';
import {Receipe} from "../../../../../../project_one_start/src/app/recipes/receipe.modal";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() receipe: Receipe;
  constructor() { }

  ngOnInit() {
  }

}
