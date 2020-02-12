import { Component, OnInit } from '@angular/core';
import {RegisterModel} from '../models/register.model';
import{FormGroup,FormBuilder,Validators} from '@angular/forms'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: RegisterModel = new RegisterModel();
  registerForm:FormGroup;
  hide:boolean;
  formValues:any;

  constructor(private formbuilder: FormBuilder ) {
   
   }

  ngOnInit() {
    this.registerForm = this.formbuilder.group({
      'name':[
        this.user.name,[
          Validators.required
        ]],
      'email':[
        this.user.email,
        [Validators.required,
          Validators.email
        ]],
      'password':[
        this.user.password,
        [Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]],
      'phone':[
        this.user.phone,[
          Validators.required
        ]],
      'DOB':[
        this.user.DOB,[
          Validators.required
        ]],
    })
    
  }

  onRegisterSubmit() {
    console.error(this.registerForm.value);
    
    alert(this.user.name + ' ' + this.user.email + ' ' + this.user.password + ' ' + this.user.phone + ' ' + this.user.DOB);
  }

}
