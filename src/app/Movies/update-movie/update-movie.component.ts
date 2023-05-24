import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { CanComponentDeactivate, Movie } from 'src/app/Interfaces';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css'],
  standalone:true,
  imports:[CommonModule,RouterModule,FormsModule]
})
export class UpdateMovieComponent  implements OnInit, CanComponentDeactivate{
movieName=''
image=''
description=''
category=''
movie!:Movie
isupdateBtnClicked=false
constructor(private router:Router, private route:ActivatedRoute, private movieService:MoviesService){}
onSubmit(){
  this.isupdateBtnClicked=true
}

ngOnInit(): void {
  this.route.params.subscribe((p:Params)=>{
    let movie=this.movieService.getMovieById(p['id'])
    this.movie=movie
   this.movieName= movie.movieName
   this.image= movie.image
   this.description= movie.description
   this.category= movie.category
  })
}
canDeactive():boolean | Observable<boolean> | Promise<boolean>{
  if((
    this.movieName !== this.movie.movieName||
    this.description !== this.movie.description||
    this.image !== this.movie.image||
    this.category !== this.movie.category
    ) && !this.isupdateBtnClicked
    
    ){
      return confirm("Do you want to Discard Changes?")
  }else{
    return true
  }

}
}
