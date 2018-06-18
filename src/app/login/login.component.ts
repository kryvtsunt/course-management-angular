import {Component, OnInit} from '@angular/core';
import {Route, Router} from "@angular/router";
import {UserServiceClient} from "../services/user.service.client";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;
  credentialsError: boolean;
  noUsernameError: boolean;
  noPasswordError: boolean;

  resetErrors() {
    this.credentialsError = false;
    this.noUsernameError = false;
    this.noPasswordError = false;
  }

  reset() {
    this.username = '';
    this.password = '';
  }


  login() {
    this.resetErrors();
    if (this.username === '') {
      this.noUsernameError = true;
    } else {
      if (this.password === '') {
        this.noPasswordError = true;
      } else {
        this.service.login(this.username, this.password)
          .then((response) => {
            if (response !== null) {
              console.log(response);
              this.router.navigate(['profile']);
            } else {
              this.credentialsError = true;
            }
          });
      }
    }
  }

  constructor(private router: Router,
              private service: UserServiceClient) {
  }

  ngOnInit() {
    this.reset();
    this.resetErrors();
  }

}
