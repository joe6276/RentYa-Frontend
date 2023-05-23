import { Injectable } from '@angular/core';
import { Movie } from './Interfaces';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private movies:Movie[] =[
    {
      id:'SOD',
      category:'Drama',
      movieName:'West of Zanzibar',
      description:'Osteitis deformans in neoplastic diseases, hand',
      image:'https://m.media-amazon.com/images/M/MV5BOTcwMDQ5NjI0NF5BMl5BanBnXkFtZTgwODMyMDU4MTE@._V1_FMjpg_UX1000_.jpg',
      price:1200
    },
    {
      id:'PYL',
      category:'Horror',
      movieName:'Paranormal Activity: The Marked Ones',
      description:'Nondisp transverse fx shaft of l tibia, 7th',
      image:'https://m.media-amazon.com/images/I/81+kn2BJ3wL._AC_SY679_.jpg',
      price:1200
    },
    {
      id:'YMK',
      category:'Drama',
      movieName:'State of Things, The (Stand der Dinge, Der)',
      description:'NIHSS score 30',
      image:'https://m.media-amazon.com/images/I/51+me0qRqRL._AC_SY445_.jpg',
      price:1200
    },
  
    {
      id:'PAE',
      category:'Drama',
      movieName:'Steel Magnolias',
      description:'Toxic effect of homologues of benzene, undetermined',
      image:'https://m.media-amazon.com/images/M/MV5BZTVkNWM2YjgtYjRhNC00OWQ5LWFiMDAtYWI2MTM0ZDk1ODE3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
      price:1200
    },
  
    {
      id:'WOW',
      category:'Animation',
      movieName:'Luca',
      description:'Prsn brd/alit a car injured in clsn w nonmtr vehicle',
      image:'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1623690039982-E63Y1YB8S91Z3BX6P2MF/luca_poster.jpg?format=300w',
      price:1200
    },
    {
      id:'AZB',
      category:'Action',
      movieName:'Sisu',
      description:'Prsn brd/alit a car injured in clsn w nonmtr vehicle',
      image:'https://i.ytimg.com/vi/d2k4QAItiSA/maxresdefault.jpg',
      price:1200
    },
    {
      id:'FST',
      category:'Action',
      movieName:'Fast X',
      description:'Prsn brd/alit a car injured in clsn w nonmtr vehicle',
      image:'https://m.media-amazon.com/images/M/MV5BNzZmOTU1ZTEtYzVhNi00NzQxLWI5ZjAtNWNhNjEwY2E3YmZjXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg',
      price:1200
    },
    {
      id:'AZB',
      category:'Comedy',
      movieName:'The War at Home',
      description:'Prsn brd/alit a car injured in clsn w nonmtr vehicle',
      image:'https://m.media-amazon.com/images/M/MV5BMWNhMmIzY2ItZjNlNC00NjY4LWE2NmItOWE3Zjg3Mzg0ZTAzXkEyXkFqcGdeQXVyNTg4MDc2NTQ@._V1_.jpg',
      price:1200
    },
    {
      id:'BIG',
      category:'Comedy',
      movieName:'The Big Bang Theory',
      description:'Prsn brd/alit a car injured in clsn w nonmtr vehicle',
      image:'https://flxt.tmsimg.com/assets/p185554_b_v9_bk.jpg',
      price:1200
    }
    ]
  
  

  constructor() { }

  getCategories(){
    let category:string[]=[]
    for(let movie of this.movies){
      if(!category.includes(movie.category)){
        category.push(movie.category)
      }
    }
    return category
  }
  getMovies(){
    return this.movies
  }

  getMoviesinCategory(category:string){
    const movies = this.movies.filter(x=>{
      return x.category===category
    })

    return movies
  }

  addMovies(newMovies:Movie){
    this.movies.push(newMovies)
  }

  getMovieById(id:string){
    return this.movies.find(x=>x.id===id) as Movie
  }

}