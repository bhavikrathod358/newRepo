import { Component } from '@angular/core';


@Component({
  selector: 'app-profile-dropdown',
  templateUrl: './profile-dropdown.component.html',
  styleUrls: ['./profile-dropdown.component.css']
})
export class ProfileDropdownComponent {
   dropdownOpen = false;
  // authService: any;

   constructor(){}
  
   
   toggleDropdown() {
     this.dropdownOpen = !this.dropdownOpen;
   }  

  //  logout() {
  //    this.authService.logout();
     
  //  }  
}
