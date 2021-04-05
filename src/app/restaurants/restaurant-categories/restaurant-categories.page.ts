import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-restaurant-categories',
  templateUrl: './restaurant-categories.page.html',
  styleUrls: ['./restaurant-categories.page.scss'],
})
export class RestaurantCategoriesPage implements OnInit {
  categories : Category[];

  constructor(private categorieServ : CategoryService) { }

  ngOnInit() {
    this.categories = this.categorieServ.getCategories();
  }

}
