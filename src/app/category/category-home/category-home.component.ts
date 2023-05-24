import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HomeComponent } from 'src/app/home/home.component';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-category-home',
  templateUrl: './category-home.component.html',
  styleUrls: ['./category-home.component.css'],
  standalone:true,
  imports:[CommonModule]
})
export class CategoryHomeComponent  implements OnInit {
  constructor(public moviesService:MoviesService){}

  ngOnInit(): void {
    console.log(this.moviesService.getCategories());
    
  }
}
