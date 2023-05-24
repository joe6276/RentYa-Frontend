import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryRoutingModule } from './category-routing.module';
import { FormsModule } from '@angular/forms';
// import { CategoryComponent } from './category.component';
// import { SingleCategoryComponent } from './single-category/single-category.component';
// import { MovieComponent } from '../Movies/movie/movie.component';
// import { CategoryHomeComponent } from './category-home/category-home.component';
// import { UpdateMovieComponent } from '../Movies/update-movie/update-movie.component';



@NgModule({
  declarations: [
    // CategoryComponent,
    // SingleCategoryComponent,
    // MovieComponent,
    // CategoryHomeComponent,
    // UpdateMovieComponent
  ],

  imports: [
    CommonModule,
    CategoryRoutingModule,
    FormsModule
  ]
})
export class CategoryModule { }
