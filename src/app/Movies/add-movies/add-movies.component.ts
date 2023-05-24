import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-add-movies',
  templateUrl: './add-movies.component.html',
  styleUrls: ['./add-movies.component.css'],
  standalone:true,
  imports:[CommonModule,FormsModule]
})
export class AddMoviesComponent implements OnInit {
  form!:FormGroup
  movieName=''
  category=''
  description=''
  image=''
  title=''
  submitted=false
  constructor(private fb:FormBuilder, private router:Router, private route:ActivatedRoute){}

  onSubmit(){
    console.log();
    this.submitted=true
    
  }
  ngOnInit(): void {
    this.route.data.subscribe((data:Data)=>{
      console.log(data);
      this.title=data['message']
    })
  }

  changeRoute(){
    this.router.navigate(['category'])
  }
}
