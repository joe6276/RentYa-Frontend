import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Movie } from 'src/app/Interfaces';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent implements OnInit{

    movies:Movie[]=[]
  constructor(private route:ActivatedRoute, private router:Router ,private movieService:MoviesService){}

  ngOnInit(): void {
    this.route.params.subscribe((p:Params)=>{
      this.movies= this.movieService.getMoviesinCategory(p['category'])
      console.log(this.movies);
      
    })    
  }
  showOne(id:string){
    this.router.navigate(['/category','movie',id])
  }
}
