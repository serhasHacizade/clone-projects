import { Component, inject } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { Category } from './category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent {
  categoryService: CategoryService = inject(CategoryService);
  categories: Category[] | undefined;
  currentActivateCategory: Category = this.categoryService.getCategoryByDefault();

  ngOnInit(): void {
    this.fetchCategories();
  }
  private fetchCategories(): void {
    this.categories = this.categoryService.getCategories();
  }
}
