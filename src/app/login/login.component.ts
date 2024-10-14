import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

// passwordFieldType: any;
password: any;
// togglePasswordVisibility: any;
  // loginForm: FormGroup;
  loginForm: any;
  passwordFieldType:string='password';



  togglePasswordVisibility() {
    this.passwordFieldType=this.passwordFieldType==='password' ? 'text':'password';
  }

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

     
  }


  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }
  
}



