import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  contactForm: any;
  

  constructor(public formbuilder: FormBuilder, public router: Router) {

    this.contactForm = this.formbuilder.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.maxLength(4)]],
   
      
      
    });
   }

  ngOnInit() {
  }

  get username() {
    return this.contactForm.get('username');
  }

  get password() {
    return this.contactForm.get('password');
  }

  onSubmit() {
    console.log("form submit details",this.contactForm.value);
    
     if(this.contactForm.value.username=="geetha" && this.contactForm.value.password==1234)
 {
  this.router.navigate(['/dashboard'])
 }
 else{
  alert("logins incorrects")
 }
  }

}