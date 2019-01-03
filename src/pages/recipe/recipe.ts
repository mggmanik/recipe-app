import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from "ionic-angular";
import {Recipe} from "../../models/recipe";
import {RecipeService} from "../../services/recipe.service";
import {EditRecipePage} from "../edit-recipe/edit-recipe";
import {ShoppingListService} from "../../services/shopping-list.service";

@Component({
  selector: 'page-recipe',
  templateUrl: 'recipe.html',
})
export class RecipePage implements OnInit {

  recipe: Recipe;
  index: number;

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private shoppingService: ShoppingListService,
              private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.recipe = this.navParams.get('recipe');
    this.index = this.navParams.get('index');
  }

  onAddIngredients() {
    this.shoppingService.addItems(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.navCtrl.push(EditRecipePage, {mode: 'Edit', recipe: this.recipe, index: this.index})
  }

  onDeleteRecipe() {
    this.recipeService.removeRecipe(this.index);
    this.navCtrl.popToRoot();
  }

}
