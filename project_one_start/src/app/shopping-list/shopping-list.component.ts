import { Component, OnInit } from '@angular/core';
import {Ingredients} from "../shared/ingredients.modal";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  Ingredients : Ingredients[] =[
    new Ingredients('Apple',4),
    new Ingredients('Banana', 5)

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
