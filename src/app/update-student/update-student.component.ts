import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tooltip } from 'bootstrap';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.scss']
})
export class UpdateStudentComponent implements OnInit {

    signupForm!: FormGroup;

    constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
      // debugger; 
      this.signupForm = this.fb.group({
        userId: new FormControl(),
        firstname: new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern("[a-zA-Z].*")]),
        lastname: new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern("[a-zA-Z].*")]),
        birthdate: new FormControl("", [Validators.required]),
        gender: new FormControl("", [Validators.required]),
        email: new FormControl("", [Validators.required, Validators.email]),
        mobile: new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("[0-9]*")]),
        chemistry: new FormControl("", [Validators.required, Validators.minLength(1), Validators.maxLength(2)]),
        operatingsystem: new FormControl("", [Validators.required, Validators.minLength(1), Validators.maxLength(2)]),
        maths: new FormControl("", [Validators.required, Validators.minLength(1), Validators.maxLength(2)]),
        microprocessor: new FormControl("", [Validators.required, Validators.minLength(1), Validators.maxLength(2)]),
  
      })
  
      this.route.params.subscribe((res) => {
        this.signupForm.controls['userId'].patchValue(res['id'])
      });
  
    }
    ngOnInit(): void {
      debugger;
      const oldRecords = localStorage.getItem('existingStudent');
      if (oldRecords !== null) {
        const userList = JSON.parse(oldRecords);
        const currentUser = userList.find((m: any) => m.userId == this.signupForm.value.userId);
        if (currentUser !== undefined) {
          this.signupForm.controls['firstname'].setValue(currentUser.firstname);
          this.signupForm.controls['lastname'].setValue(currentUser.lastname);
          this.signupForm.controls['birthdate'].setValue(currentUser.birthdate);
          this.signupForm.controls['gender'].setValue(currentUser.gender);
          this.signupForm.controls['email'].setValue(currentUser.email);
          this.signupForm.controls['mobile'].setValue(currentUser.mobile);
          this.signupForm.controls['chemistry'].setValue(currentUser.chemistry);
          this.signupForm.controls['operatingsystem'].setValue(currentUser.operatingsystem);
          this.signupForm.controls['maths'].setValue(currentUser.maths);
          this.signupForm.controls['microprocessor'].setValue(currentUser.microprocessor);
        }
  
  
      }
      Array.from(document.querySelectorAll('label[data-bs-toggle="tooltip"]'))
      .forEach(tooltipNode => new Tooltip(tooltipNode))
    }
  
  
    updateUser() {
      if (this.signupForm.valid) {
        const oldRecords = localStorage.getItem('existingStudent');
        if (oldRecords !== null) {
          const userList = JSON.parse(oldRecords);
          const temp = userList.findIndex((a: any) => a.userId == this.signupForm.value.userId);
          userList[temp] = this.signupForm.value;
          localStorage.setItem('existingStudent', JSON.stringify(userList));
          this.router.navigateByUrl('details');
        }
      }
      else {
        this.validateAllFormFields(this.signupForm);
        this.router.navigateByUrl('details');
      }
    }
    validateAllFormFields(formGroup: FormGroup) {
      Object.keys(formGroup.controls).forEach(field => {
        const control = formGroup.get(field);
        if (control instanceof FormControl) {
          control.markAsTouched({ onlySelf: true });
        }
        else if (control instanceof FormGroup) {
          this.validateAllFormFields(control);
        }
      });
    }
    activateRegisterDetails(){
      this.router.navigateByUrl('details');
    }
  }
  
  
  
  
  