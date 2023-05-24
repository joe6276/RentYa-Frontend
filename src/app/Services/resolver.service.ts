import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Movie } from '../Interfaces';
import { MoviesService } from '../movies.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<Movie[]> {

  constructor(private movieService:MoviesService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
   Movie[] | Observable<Movie[]> | Promise<Movie[]> {
    return this.movieService.getMoviesinCategory(route.params['category'])
  }
}
