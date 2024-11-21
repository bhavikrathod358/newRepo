import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  loginForm: any;
  router: any;
  errorMessage: string | undefined;
  SignInService: any;

  // Signin: any;

  private apiUrl = 'https://api-uat.healthwealthsafe.link/api/web/staffLogin';
  private tokenKey = 'authToken'; // Key to store the token in localStorage/sessionStorage
  authenticated: any;
  // isAuthenticated: any;

  Signin(loginData: any): Observable<any> {
    console.log(loginData);
    return this.http.post<any>(this.apiUrl, loginData);
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    const token = localStorage.getItem(this.tokenKey); // Retrieve token from storage
    return !!token; // Return true if token exists, false otherwise
  }

  // Set authentication status
  setAuthenticated(status: boolean): void {
    this.authenticated = status;
  }
  // Log out user
  logout(): void {
    localStorage.removeItem(this.tokenKey); // Remove token on logout
  }
  constructor(private http: HttpClient) {}
}
