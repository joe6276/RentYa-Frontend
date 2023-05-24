import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddMoviesComponent } from './Movies/add-movies/add-movies.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CanActivateService } from './Services/can-activate.service';
import { CategoryComponent } from './category/category.component';
import { ResolverService } from './Services/resolver.service';
import { SingleCategoryComponent } from './category/single-category/single-category.component';
import { MovieComponent } from './Movies/movie/movie.component';
import { CategoryHomeComponent } from './category/category-home/category-home.component';
import { CanDeactivateService } from './Services/can-deactivate.service';
import { UpdateMovieComponent } from './Movies/update-movie/update-movie.component';



const routes:Routes=[
  {path:'', 
  loadComponent:()=> import('../app/home/home.component').then(c=>c.HomeComponent)
  } ,
  {path:'addMovie', data:{message:'Add A new Movie'}, 
  loadComponent:()=> import('../app/Movies/add-movies/add-movies.component').then(c=>c.AddMoviesComponent)
  },
  // {path:'category' ,
  //  loadChildren:()=> import('../app/category/category.module').then(m=>m.CategoryModule)},
  {path:'category', canActivateChild:[CanActivateService], 
  loadComponent:()=> import('../app/category/category.component').then(c=>c.CategoryComponent)
  ,children:[
    {path:':category',resolve:{movieData:ResolverService} ,
    loadComponent:()=> import('../app/category/single-category/single-category.component').then(c=>c.SingleCategoryComponent)
  },
    {path:'movie/:id', 
    loadComponent:()=> import('../app/Movies/movie/movie.component').then(c=>c.MovieComponent)
  },
    {path:'', 
    loadComponent:()=> import('../app/category/category-home/category-home.component').then(c=>c.CategoryHomeComponent)},
    {path:'movie/update/:id', canDeactivate:[CanDeactivateService], 
    loadComponent:()=> import('../app/Movies/update-movie/update-movie.component').then(c=>c.UpdateMovieComponent)
  }
  ]},
  {path:'notFound', component:NotFoundComponent},
  {path:'**', redirectTo:'/notFound'},
  
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
