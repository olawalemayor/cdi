import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter, find, map } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _http: HttpClient, private router: Router) {}

  users: User[] = [];
  user: User = {
    id: 0,
    name: '',
    password: '',
    role: '',
    username: '',
  };

  logOut() {
    this.user = {
      id: 0,
      name: '',
      password: '',
      role: '',
      username: '',
    };

    this.router.navigateByUrl('/');
  }

  getUsers() {
    return this._http.get<User[]>('../../assets/users.json');
  }

  setUsers(users: User[]) {
    this.users = users;
  }

  setUser(user: User) {
    this.user = user;
  }

  login(username: string, passsword: string) {
    return this.getUsers().subscribe((users) => {
      const result = users.find(
        (user) => user.username === username && user.password === passsword
      );

      if (!result) return console.log('user not found');

      this.setUser(result);

      this.router.navigateByUrl('/profile');
    });
  }

  getUsersbyState(state: string) {
    return this._http
      .get<User[]>('../../assets/users.json')
      .pipe(map((users) => users.filter((user) => user.state === state)));
  }

  addUser(name: string, username: string, password: string, role: string) {
    //set new id for the new user using the latest user ID
    const id = this.users[this.users.length].id + 1;

    // create new user with parameters
    const newUser: User = {
      id,
      name,
      username,
      password,
      role,
    };

    //add the user to the Users array
    this.users.push(newUser);
  }

  removeUser(id: number, username: string) {
    //find the user
    const user = this.users.find(
      (user) => user.id === id && user.username === username
    );

    if (!user) return;
    //find the index of the user in the usersArray
    const userIndex = this.users.indexOf(user);

    // remove the user
    this.users.splice(userIndex, 1);
  }
}
