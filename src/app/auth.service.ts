import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedUser = false;
 

  constructor(private authService: AuthService, private router: Router) { }
   // Check if the user is authenticated
   isAuthenticated(): boolean {
    return this.isAuthenticatedUser;
  }

  // Simulate user login
  login(): void {
    this.isAuthenticatedUser = true;
  }

  // Simulate user logout
  logout(): void {
    this.isAuthenticatedUser = false;
  }
}
