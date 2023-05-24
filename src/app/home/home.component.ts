import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone:true,
  imports:[CommonModule,],
  // encapsulation:ViewEncapsulation.None
})
export class HomeComponent {

}
