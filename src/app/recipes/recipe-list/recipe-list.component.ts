import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes:Recipe[]=[

  new Recipe('A Test Recipe','This is simply test','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp3H1tWFeLghZh08zvhLT3b7f9e9VcuG5w_w&usqp=CAU')
];
  constructor() { }

  ngOnInit(): void {
  }

}
