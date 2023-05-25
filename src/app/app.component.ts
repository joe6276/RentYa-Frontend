import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from './Services/auth.service';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RentYa';

  constructor(public authService:AuthService){}

  
}
