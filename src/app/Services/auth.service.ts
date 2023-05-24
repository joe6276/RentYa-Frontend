import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn=false
  constructor() { }

  login(){
    this.isLoggedIn=true
  }
  logout(){
    this.isLoggedIn=false
  }

  isAuthenticated(){
    const promise= new Promise((resolve,reject)=>{
      setTimeout(()=>{
          resolve(this.isLoggedIn)
      },200)
    })
    return promise
  }

  getStatus(){
    return this.isLoggedIn
  }
  
}
