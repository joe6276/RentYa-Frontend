import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  standalone:true,
  imports:[CommonModule,RouterModule]
})
export class CategoryComponent {

  constructor(public movieService:MoviesService){}
}
