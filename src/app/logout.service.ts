import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LogoutService {
  clean: any;

  constructor(private router: Router) {}

  cleanSession(): void {
    this.router.navigate(['/login']);
    localStorage.clear();
  }
  redirect(): void {
    this.router.navigate(['/login']);
  }
}
