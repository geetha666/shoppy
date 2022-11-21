
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
name: any;
password: any;
  contactForm: any;




  constructor(public router: Router, public formBuilder: FormBuilder) {

    this.contactForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(10)]],
      lastname: ['', [Validators.required, Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', [Validators.required]],
      isMarried: ['', [Validators.required]],
      country: ['', [Validators.required]],
      
      
    });

   }

  ngOnInit() {
  }

  get firstname() {
    return this.contactForm.get('firstname');
  }

  get lastname() {
    return this.contactForm.get('lastname');
  }

  get email() {
    return this.contactForm.get('email');
  }
 
  get gender() {
    return this.contactForm.get('gender');
  }
 
  get isMarried() {
    return this.contactForm.get('isMarried');
  }
 
  get country() {
    return this.contactForm.get('country');
  }






  onSubmit() {
    console.log("form submit details",this.contactForm.value);
  }

  

// loginpage() {
//   console.log("names", this.name)
//   console.log("password", this.password)
//   if(this.name=="" || this.name==undefined){
//     alert("please enter user name")
//   }
 
//   else if(this.password=="" || this.password==undefined){
//   alert("please enter password")
//    }
//  else if(this.name=="geeta" && this.password==1234)
//  {
//   this.router.navigate(['/dashboard'])
//  }
//  else{
//   alert("logins incorrects")
//  }


// }




}
