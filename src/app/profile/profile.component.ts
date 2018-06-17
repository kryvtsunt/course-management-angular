import {Component, OnInit} from '@angular/core';
import {User} from '../models/user.model.client';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';
import {SectionServiceClient} from '../services/section.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router, private service: UserServiceClient,  private sectionService: SectionServiceClient, ) {
  }

  user: User = new User();
  edit: boolean;
  sections = [];

  toggleEdit(){
    this.edit = !this.edit;
  }

  update(u: User) {
    this.service.updateUser(u).then((resp) => {
      console.log('resp ' + resp.firstName);
      this.service
        .profile()
        .then(user => {
          this.user = user;
          console.log(user)
        })
    })
  }

  logout() {
    this.service.logout()
      .then(() =>
        this.router.navigate(['tk/home']));
  }

  ngOnInit() {
    this.edit = false;
    this.service
      .profile()
      .then(user => {
        this.user = user;
        console.log(user)
      });
    this.sectionService
      .findSectionsForStudent()
      .then(sections => this.sections = sections );
  }

}
