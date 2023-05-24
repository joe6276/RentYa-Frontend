import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import { Movie } from 'src/app/Interfaces';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  standalone:true,
  imports:[CommonModule, RouterModule]
})
export class MovieComponent implements OnInit{
  constructor(private route:ActivatedRoute, private movieService:MoviesService){}
  movie!:Movie
  ngOnInit(): void {
  
    // this.route.snapshot.params['id']
    this.route.params.subscribe((p:Params)=>{
     this.movie= this.movieService.getMovieById(p['id'])      
    })
  }
}
