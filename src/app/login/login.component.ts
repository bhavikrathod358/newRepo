import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { SignInService } from '../sign-in.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

// passwordFieldType: any;
// password: any;
// togglePasswordVisibility: any;
  // loginForm: FormGroup;
  loginForm: any;
  passwordFieldType:string='password';
// errorMessage: any;
errorMessage: string = '';
loginData: any; 
  // router: any;
// onSubmit: any;
// onsubmit: any;
  

  togglePasswordVisibility() {
    this.passwordFieldType=this.passwordFieldType==='password' ? 'text':'password';
  }

  constructor(private fb: FormBuilder, private http: HttpClient,private login: SignInService,private router:Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onsubmit():void {
    if (this.loginForm.valid) {
       this.login.Signin(this.loginForm.value).subscribe((response: any) => {
        
          console.log('Login successful', response);
          this.router.navigate(['/dashboard']); 
        },  
        (error: any) => {
          console.error('Login failed', error);
          this.errorMessage = 'Invalid username or password';
        }
      )    
   }
  }
}



