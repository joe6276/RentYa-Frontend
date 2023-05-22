import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-template-d-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './template-d-form.component.html',
  styleUrls: ['./template-d-form.component.css']
})
export class TemplateDFormComponent {
  @ViewChild('form') form!:NgForm
  genders=['Male', 'Female', 'Other']
  onSubmit(){
    this.form.resetForm()
  }
  
  PrePopulate1(){
    this.form.form.patchValue({
      personalDetails:{
        name:'Joshua Ondieki',
        email:'joshua@gmail.com'
      }
    })
  }
  
  PrePopulate(){
    this.form.setValue({
      personalDetails:{
        name:'Joy Mary',
        email:'joy@gmail.com'
      },
      language:'javascript',
      message:'Hello there...',
      gender:'Female'
    })
  }
}
