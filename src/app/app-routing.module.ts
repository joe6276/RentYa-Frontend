import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { AddMoviesComponent } from './Movies/add-movies/add-movies.component';
import { SingleCategoryComponent } from './category/single-category/single-category.component';
import { CategoryHomeComponent } from './category/category-home/category-home.component';
import { MovieComponent } from './Movies/movie/movie.component';
import { NotFoundComponent } from './Movies/not-found/not-found.component';

const routes:Routes=[
  {path:'', component:HomeComponent} ,
  {path:'category', component:CategoryComponent,children:[
    {path:':category', component:SingleCategoryComponent},
    {path:'movie/:id', component:MovieComponent},
    {path:'', component:CategoryHomeComponent},
  ]},
 
  {path:'addMovie', component:AddMoviesComponent},

  {path:'notFound', component:NotFoundComponent},
  {path:'**', redirectTo:'/notFound'},
  
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
