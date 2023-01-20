import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tooltip } from 'bootstrap';
import { NgConfirmService } from 'ng-confirm-box';
import {NgToastService} from 'ng-angular-popup'
@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit {
  signupForm!: FormGroup;
  submitted: boolean = false;
  displayalert = false;
  notify:any;
  constructor(private fb: FormBuilder, private router: Router, private confirm: NgConfirmService,private  toast:NgToastService) { 
this.notify=[];
  }
  ngOnInit(): void {
    this.signupForm = this.fb.group({
      userId: new FormControl(),
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z].*")]],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z].*")]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.maxLength(10), Validators.pattern("[0-9]*")]],
      chemistry: ['', Validators.required],
      operatingsystem: ['', Validators.required],
      maths: ['', Validators.required],
      microprocessor: ['', Validators.required],
      birthdate: ['', Validators.required]
    })
    Array.from(document.querySelectorAll('label[data-bs-toggle="tooltip"]')).forEach(tooltipNode => new Tooltip(tooltipNode))
  }
  getNewUserId() {
    const oldRecords = localStorage.getItem('existingStudent');
    if (oldRecords !== null) {
      const newStudent = JSON.parse(oldRecords);
      return newStudent.length + 1;
    }
    else {
      return 1;
    }
  }
  private validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsDirty({ onlySelf: true });
      }
      else if (control instanceof FormGroup) {
        this.validateAllFormFields(control)
      }
    })
  }
  onSignUp(): void {
    this.submitted = true;
    if (this.signupForm.valid) {
      const register = this.signupForm.value;
      const Student = {
        firstname: register.firstname,
        lastname: register.lastname,
        email: register.email,
        gender: register.gender,
        mobile: register.mobile,
        chemistry: register.chemistry,
        operatingsystem: register.operatingsystem,
        maths: register.maths,
        microprocessor: register.microprocessor,
        birthdate: register.birthdate
      }
      const latestId = this.getNewUserId();
      this.signupForm.value.userId = latestId;
      const oldRecords = localStorage.getItem('existingStudent');
      if (oldRecords !== null) {
        const userList = JSON.parse(oldRecords);
        userList.push(this.signupForm.value);
        localStorage.setItem('existingStudent', JSON.stringify(userList));
      }
      else
      {
        const userArr = [];
        userArr.push(this.signupForm.value);
        localStorage.setItem('existingStudent', JSON.stringify(userArr));
      }
      this.confirm.showConfirm("Are you sure want to register??",
        () => {
          this.router.navigateByUrl('details');
          (this.toast.success({ detail: Student.firstname + " " + Student.lastname + " successfully registered" }));
        },
        () => {
          this.signupForm.reset();
        }
      )
    }
    else 
    {
      console.log("Form is not valid")
      this.validateAllFormFields(this.signupForm);
    }
  }
}



