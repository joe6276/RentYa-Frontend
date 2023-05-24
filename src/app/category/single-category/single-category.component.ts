import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router, RouterModule } from '@angular/router';
import { Movie } from 'src/app/Interfaces';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css'],
  standalone:true,
  imports:[CommonModule,RouterModule]
})
export class SingleCategoryComponent implements OnInit{

    movies:Movie[]=[]
  constructor(private route:ActivatedRoute, private router:Router ,private movieService:MoviesService){}

  ngOnInit(): void {
    // this.route.params.subscribe((p:Params)=>{
    //   this.movies= this.movieService.getMoviesinCategory(p['category'])
    //   console.log(this.movies);
      
    // })    

    this.route.data.subscribe((data:Data)=>{
       this.movies= data['movieData']
    })
  }
  showOne(id:string){
    this.router.navigate(['/category','movie',id])
  }
}
