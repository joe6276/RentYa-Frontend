import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncValidatorFn, FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  genders=['Male', 'Female', 'Other']
  unallowedNmes=['Hacker', 'John Doe', 'Jane Doe', 'Test', "Anonymous"]
  checkUnallowedNames=(control:FormControl):{[x:string]:boolean} |null=>{
    if(this.unallowedNmes.includes(control.value)){
      //error
      return {unallowedName:true}
    }
    return null
  }


  form:FormGroup=new FormGroup({
    personalDetails:new FormGroup({
      name:new FormControl('', [Validators.required, this.checkUnallowedNames]),
      password:new FormControl('', [Validators.required, Validators.pattern(`^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$`)]),
      email:new FormControl(null ,[Validators.required, Validators.email],[<AsyncValidatorFn>this.checkEmail]),
    }),
    language:new FormControl('default' ,[Validators.required]),
    message:new FormControl(null ,[Validators.required]),
    gender:new FormControl('Male', [Validators.required]),
    moreLanguages:new FormArray([])
  })

  ngOnInit(): void {
    // this.form= 
  }

  checkEmail(control:FormControl):Promise<{[x:string]:boolean} |null>{
    const promise = new Promise<{[x:string]:boolean} |null>((resolve,reject)=>{
      if(control.value==='test@gmail.com'){
        setTimeout(()=>{
            resolve({emailUllowed:true})
        },1500)
      }else{
        resolve(null)
      }
    })
    return promise
  }

  
  onSubmit(){
   console.log(this.form);
   this.form.reset()
  }
  


  PrePopulate1(){
    this.form.patchValue({
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
        email:'joy@gmail.com',
        password:'Amazin@2023'
      },
      language:'javascript',
      message:'Hello there...',
      gender:'Female',
      moreLanguages:[]
    })
  }

  // checkUnallowedNames(control:FormControl):{[x:string]:boolean} |null{
  //   if(this.unallowedNmes.includes(control.value)){
  //     //error
  //     return {unallowedName:true}
  //   }
  //   return null
  // }


  addLanguage(){
    const control= new FormControl(null, [Validators.required]);
    (this.form.get('moreLanguages') as FormArray).push(control)
  }

  getControls(){
   return (this.form.get('moreLanguages') as FormArray).controls
  }

  removeLanguage(i:number){
    (this.form.get('moreLanguages') as FormArray).removeAt(i)
  }
}
