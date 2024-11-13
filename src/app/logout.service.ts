import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LogoutService {
  clean: any;
  // private readonly TOKEN_KEY = 'authToken'; 
  constructor(private router: Router) {}
  // // Method to log in and save token to localStorage
  // login(token: string): void {
  //   localStorage.setItem(this.TOKEN_KEY, token);
  // }

  //   // Method to log out and clear token from localStorage
  //   logout(): void {
  //     localStorage.removeItem(this.TOKEN_KEY);
  //   }

  //   // Check if the user is logged in
  //   isLoggedIn(): boolean {
  //    return localStorage.getItem(this.TOKEN_KEY) !== null;
  // }

  //  // Optionally, get the token if needed
  //  getToken(): string | null {
  //   return localStorage.getItem(this.TOKEN_KEY);
  // }
  cleanSession(): void {
    this.router.navigate(['/login']);
    localStorage.clear();
  }
  redirect(): void {
    this.router.navigate(['/login']);
  }
}
