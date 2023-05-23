import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Movie } from 'src/app/Interfaces';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit{
  constructor(private route:ActivatedRoute, private movieService:MoviesService){}
  movie!:Movie
  ngOnInit(): void {
  

    this.route.params.subscribe((p:Params)=>{
     this.movie= this.movieService.getMovieById(p['id'])      
    })
  }
}
