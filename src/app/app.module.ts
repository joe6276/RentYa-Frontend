import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDFormComponent } from './template-d-form/template-d-form.component';
import { CategoryComponent } from './category/category.component';
import { CategoryHomeComponent } from './category/category-home/category-home.component';
import { SingleCategoryComponent } from './category/single-category/single-category.component';
import { AddMoviesComponent } from './Movies/add-movies/add-movies.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { MovieComponent } from './Movies/movie/movie.component';
import { NotFoundComponent } from './Movies/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    CategoryHomeComponent,
    SingleCategoryComponent,
    AddMoviesComponent,
    HomeComponent,
    MovieComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormComponent,
    TemplateDFormComponent,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
