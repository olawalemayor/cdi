import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private userService: UserService) {}

  login(form: NgForm) {
    const { username, password } = form.value;

    this.userService.login(username, password);
  }

  ngOnInit(): void {}
}
