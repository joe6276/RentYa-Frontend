import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncValidatorFn, FormArray, FormBuilder, 
  FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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

  options = ['Javascript', 'PHP', 'Java', 'C#', 'C++', 'C', 'Go', 'ML']
  checkUnallowedNames=(control:FormControl):{[x:string]:boolean} |null=>{
    if(this.unallowedNmes.includes(control.value)){
      //error
      return {unallowedName:true}
    }
    return null
  }

    constructor(private fb:FormBuilder){}
  form:FormGroup=this.fb.group({
    personalDetails:this.fb.group({
      name:['', [Validators.required, this.checkUnallowedNames]],
      password:['', [Validators.required, Validators.pattern(`^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$`)]],
      email:[null ,[Validators.required, Validators.email],[<AsyncValidatorFn>this.checkEmail]],
    }),
    language:['default' ,[Validators.required]],
    message:[null ,[Validators.required]],
    gender:['Male', [Validators.required]],
    moreLanguages:this.fb.array([]),
    langOptions:this.fb.array([])
  })

  ngOnInit(): void {
    // this.form= 
  }

  checkEmail(control:FormControl):Promise<{[x:string]:boolean} |null>{
    const promise = new Promise<{[x:string]:boolean} |null>((resolve,reject)=>{
      if(control.value==='test@gmail.com'){
        setTimeout(()=>{
            resolve({emailUnallowed:true})
        },1500)
      }else{
        resolve(null)
      }
    })
    return promise
  }

  
  onSubmit(){
   console.log(this.form);
   
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


  onChange(e:Event){
   let value= (e.target as HTMLInputElement).value
   console.log(value);
    const control= new FormControl(value);
    (this.form.get('langOptions') as FormArray).push(control)
    
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
