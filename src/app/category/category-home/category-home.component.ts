import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, filter, interval, map, max, take, tap } from 'rxjs';
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
  sub!:Subscription
  ngOnInit(): void {
    console.log(this.moviesService.getCategories());
  const customObservable= new Observable<number>((observer:any)=>{
    let count =0
    setInterval(()=>{
      observer.next(count)
      if(count==3){
        observer.error(new Error('An error Occured'))
      }

      if(count===5){
        observer.complete()
      }
      count++;
    },1000)
  })

  this.sub= customObservable.pipe(
    map(x=>x * 100),
    tap(x=>console.log('From tap', x)),
    filter(x=>x<250),
    // tap(x=>console.log('From Tap after Filter', x)),
    take(2),
    max()
  ).subscribe((numbers)=>{
    console.log(numbers); 
  },
  (error)=>{
    //add logic to display error and logging
    console.log(error.message);
  },
  ()=>{
    console.log('Done'); 
  })
  }
   ngOnDestroy(): void {
    this.sub.unsubscribe()
   }
}
