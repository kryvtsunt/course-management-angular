import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserServiceClient} from "../services/user.service.client";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
              private service: UserServiceClient) {
  }

  username: String;
  password: String;
  password2: String;
  usernameError: boolean;
  passwordError: boolean;
  noUsernameError: boolean;
  noPasswordError: boolean;
  noPassword2Error: boolean;
  img_path = 'https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100';

  resetErrors() {
    this.usernameError = false;
    this.passwordError = false;
    this.noUsernameError = false;
    this.noPasswordError = false;
    this.noPassword2Error = false;
  }

  reset(){
    this.username = '';
    this.password = '';
    this.password2 = '';
  }

  register() {
    this.resetErrors();
    if (this.username === '') {
      this.noUsernameError = true;
    } else {
      if (this.password === '') {
        this.noPasswordError = true;
      } else {
        if (this.password2 === '') {
          this.noPassword2Error = true;
        } else {
          if (this.password === this.password2) {
            this.service.findUserByUsername(this.username)
              .then((response) => {
                console.log(response);
                if (response === null) {
                  this.service
                    .createUser(this.username, this.password, this.img_path)
                    .then(() => this.router.navigate(['profile']));
                } else {
                  this.usernameError = true;
                  // alert('Username is already taken');
                }
              });
          } else {
            this.passwordError = true;
            // alert('Passwords do not match');
          }
        }
      }
    }
  }

  ngOnInit() {
    this.reset();
    this.resetErrors();
  }

}
