import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-category-home',
  templateUrl: './category-home.component.html',
  styleUrls: ['./category-home.component.css']
})
export class CategoryHomeComponent  implements OnInit {
  constructor(public moviesService:MoviesService){}

  ngOnInit(): void {
    console.log(this.moviesService.getCategories());
    
  }
}
