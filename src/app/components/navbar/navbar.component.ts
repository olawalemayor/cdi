import { Component, OnChanges, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
  selector: 'navbar',
})
export class NavBarComponent {
  constructor(private userService: UserService) {}

  setLoggedUser() {
    return this.userService.user;
  }

  logOut() {
    this.userService.logOut();
  }
}
