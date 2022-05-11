import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(private userService: UserService) {}

  mode: string = 'view';

  user: any;

  roles = ['Supervisor', 'CSO'];

  ngOnInit(): void {
    this.user = this.userService.user;
  }
}
