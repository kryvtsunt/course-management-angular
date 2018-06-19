import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})

export class NavbarComponent implements OnInit {

  loggedIn: boolean;

  constructor(private userService: UserServiceClient, private router: Router) {

  }

  checkStatus() {
    this.userService.checkStatus().then(response => this.loggedIn = response);
  }
  logout() {
    this.userService.logout()
      .then(() =>
        this.router.navigate(['tk/home']));
  }
  ngOnInit() {
    this.router.events.subscribe(() => {
      this.checkStatus();
    });
  }

}
