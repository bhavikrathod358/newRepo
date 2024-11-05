import { Component, Input } from '@angular/core';
import { SignInService } from '../sign-in.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css']
})
export class ProfileHeaderComponent {
  
  constructor(private login: SignInService,private router:Router) {}

  @Input() name: string = 'John Morrison';
  @Input() role: string = 'HWS Care Manager';
  @Input() phone: string = '+1 (401) 501-8877';
  @Input() email: string = 'jaydevvara27@gmail.com';
  @Input() location: string = 'Ullin, IL, US';
  @Input() associations: string = 'asd, Aufderhar, Blaine Wong, bna, California, Carter ...';
}
