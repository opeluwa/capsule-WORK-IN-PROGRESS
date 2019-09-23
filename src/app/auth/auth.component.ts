import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthenticationService} from '../shared/authentication.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  @ViewChild('f', {static : true}) f: NgForm;
  errorMessage: string;
  fieldsError: boolean;
  loginMode = true;
  constructor(private authServ: AuthenticationService, private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }


  AlertShower() {
    console.log('error');
    this.fieldsError = true;
  }

  submitForm() {
    console.log(this.f.value.password);
    console.log(this.f.value.email);
    if (this.loginMode) {
      this.authServ.login({email: this.f.value.email,
        password: this.f.value.password}).subscribe(data => {
        this.router.navigate(['/Dashboard']);
      }, err => {

      });

    } else {
      console.log('dsadssadas');
      this.authServ.registerAccount({email: this.f.value.email,
        password: this.f.value.password}).subscribe(data => {
        this.router.navigate(['/Dashboard']);
      }, err => {

      });
    }
  }

}
