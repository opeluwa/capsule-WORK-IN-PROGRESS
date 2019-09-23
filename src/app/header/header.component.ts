import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../shared/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedIn: boolean;
  constructor(private authServ: AuthenticationService) { }

  ngOnInit() {
    this.authServ.userSubject.subscribe(data => {
      this.loggedIn = !!data;
    });
  }

  logout() {
    this.authServ.logout();
  }

}
