import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';
import { CanActivateService } from '../Services/can-activate.service';
import { CategoryComponent } from './category.component';
import { ResolverService } from '../Services/resolver.service';
import { SingleCategoryComponent } from './single-category/single-category.component';
import { MovieComponent } from '../Movies/movie/movie.component';
import { CategoryHomeComponent } from './category-home/category-home.component';
import { CanDeactivateService } from '../Services/can-deactivate.service';
import { UpdateMovieComponent } from '../Movies/update-movie/update-movie.component';

const routes:Routes=[
  {path:'', canActivateChild:[CanActivateService], component:CategoryComponent,children:[
    {path:':category',resolve:{movieData:ResolverService} ,component:SingleCategoryComponent},
    {path:'movie/:id', component:MovieComponent},
    {path:'', component:CategoryHomeComponent},
    {path:'movie/update/:id', canDeactivate:[CanDeactivateService], component:UpdateMovieComponent}
  ]},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
   ],
   exports:[RouterModule]
})
export class CategoryRoutingModule { }
