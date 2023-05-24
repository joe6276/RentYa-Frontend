import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CanComponentDeactivate } from '../Interfaces';
import { Observable } from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateService implements CanDeactivate<CanComponentDeactivate>{

  constructor() { }
  canDeactivate(component: CanComponentDeactivate,
     currentRoute: ActivatedRouteSnapshot,
      currentState: RouterStateSnapshot,
       nextState: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return component.canDeactive()
  }
  
}
