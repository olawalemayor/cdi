import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  mode: string = 'update';

  user: User = { id: 0, name: '', password: '', role: '', username: '' };

  roles = ['Supervisor', 'CSO'];

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      if (param['id'])
        if (`${param['id']}` !== 'new')
          this.userService.getUsers().subscribe((users) => {
            const result = users.find(
              (user) => `${user.id}` === `${param['id']}`
            );
            if (result) {
              this.user = result;
              this.mode = 'update';
            }
          });
        else this.mode = 'new';
      else this.user = this.userService.user;
    });
  }
}
