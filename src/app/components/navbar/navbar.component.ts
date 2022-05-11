import { Component, OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from '../../services/user.service';

@Component({
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
  selector: 'navbar',
})
export class NavBarComponent implements OnInit {
  constructor(private userService: UserService) {}

  setLoggedUser() {
    return this.userService.user;
  }

  logOut() {
    this.userService.logOut();
  }

  ngOnInit(): void {}
}
