import { Component } from '@angular/core';
import { LogoutService } from '../logout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  // authService: any;
  // logoutService: any;
  // logout: any;

  constructor(private logoutService: LogoutService) {}

  
  // Define the logout method
  logout() {
    this.logoutService.cleanSession();
    document.cookie = 'token=; expires=Mon, 18 Nov 2024 00:00:00 UTC; path=/;';
    sessionStorage.clear();
  }
}
