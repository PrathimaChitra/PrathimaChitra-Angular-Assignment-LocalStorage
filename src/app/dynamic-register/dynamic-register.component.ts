import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dynamic-register',
  templateUrl: './dynamic-register.component.html',
  styleUrls: ['./dynamic-register.component.scss']
})
export class DynamicRegisterComponent implements OnInit {

dynamicFormArray:any;
registerationForm!:FormGroup;
submitted:boolean=false;
 // confirm: any;

constructor(private httpclient:HttpClient,private fb:FormBuilder,private router:Router)
{}
  
  
ngOnInit(){
  this.registerationForm=this.fb.group({

  });
  this.httpclient.get('/assets/Register.json').subscribe(data=>
    {
      this.dynamicFormArray=data;
      this.createFormControl();
      //console.log(this.dynamicFormArray)
    });
}
createFormControl(){
  this.dynamicFormArray.forEach((data: {
    Required: boolean; ID: any; 
}) =>
     {
      if(data.Required===true){
       this.registerationForm.addControl(data.ID, new FormControl('',[Validators.required,Validators.maxLength(20)]));
      }
      else{
        this.registerationForm.addControl(data.ID, new FormControl(''));
      }
    });
 console.log(this.registerationForm);

}
onSignUp():void{
  this.submitted=true;
  
   if(this.registerationForm.valid){
console.log(this.registerationForm.value);

localStorage.setItem('SData',JSON.stringify(this.registerationForm.value));
// this.router.navigateByUrl('details');
// this.confirm.showConfirm("Are you sure want to register??",
// ()=>{
//   this.router.navigateByUrl('details');
// },
// ()=>{
//   this.registerationForm.reset();
// })
//....................
   let  dialog = confirm("Are you want to register?");
   if (dialog) {
   this.router.navigateByUrl('details'); 
  }
  else {
    this.router.navigateByUrl('register'); 
   }
}

  else {
    console.log("Form is not valid")
    this.validateAllFormFields(this.registerationForm);
  }
}

private validateAllFormFields(formGroup: FormGroup) {
  Object.keys(formGroup.controls).forEach(field => {
    const control = formGroup.get(field);
    if (control instanceof FormControl) {
      control.markAsDirty({ onlySelf: true });
    }
    else if(control instanceof FormGroup) {
      this.validateAllFormFields(control)
    }
  })
}

}
