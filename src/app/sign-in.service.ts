import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  loginForm: any;
  router: any;
  errorMessage: string | undefined;
  SignInService: any;

  // Signin: any;
   
  
  // Signin():void{
  //   const loginData= this.loginForm.value;
    // const apiUrl='https://api-uat.healthwealthsafe.link/api/web/staffLogin';

  //      this.http.post(apiUrl, loginData).subscribe(
  //       (response: any) => {
  //         console.log('Login successful', response);
  //         // Handle success (e.g., store token, navigate)
  //         this.router.navigate(['/dashboard']);
  //      },

  //      (error) => {
  //       console.error('Login failed', error);
  //       this.errorMessage = 'Invalid username or password';
  //     }
      
  //   );
  // }

      private apiUrl='https://api-uat.healthwealthsafe.link/api/web/staffLogin';

  Signin(loginData: any): Observable<any> {
    console.log(loginData);
    return this.http.post<any>(this.apiUrl, loginData); 
  }

  constructor(private http:HttpClient) { 

  
  }
}
