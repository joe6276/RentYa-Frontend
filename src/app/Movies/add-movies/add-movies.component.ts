import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-movies',
  templateUrl: './add-movies.component.html',
  styleUrls: ['./add-movies.component.css']
})
export class AddMoviesComponent implements OnInit {
  form!:FormGroup

  constructor(private fb:FormBuilder, private router:Router, private route:ActivatedRoute){}
  onSubmit(){
    console.log(this.form);
    
  }
  ngOnInit(): void {
    this.form= this.fb.group({
      movieName:['', Validators.required],
      description:['', Validators.required],
      category:['', Validators.required],
      image:['', Validators.required]
    })
  }

  changeRoute(){
    this.router.navigate(['category'])
  }
}
