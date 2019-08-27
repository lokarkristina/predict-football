import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import * as fromStore from '../../store';

import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user: User;
  message: string;
  userLoggedIn: boolean;

  constructor(private store: Store<fromStore.UserState>) {}

  ngOnInit() {
    this.store.select(fromStore.getAllUsers);
    this.store.select(fromStore.getLoggedInUser).subscribe(user => {
      user ? (this.userLoggedIn = true) : (this.userLoggedIn = false);
    });
    this.buildForm();
  }

  onSubmit(email, password) {
    // TODO Check types
    email = email.value;
    password = password.value;

    let allUsers: User[];

    // Get all users
    this.store
      .select(fromStore.getAllUsers)
      .subscribe(users => (allUsers = users));

    // Check if email in allUsers
    for (const key in allUsers) {
      if (allUsers.hasOwnProperty(key) && allUsers[key].email === email) {
        const user = allUsers[key];

        if (user.password === password) {
          this.message = 'Login SUCCESSFUL!';
          this.userLoggedIn = true;

          // set to store
          this.store.dispatch(new fromStore.LoginUser(user.id));

          // set to localStore
          // ! TODO Don't save the password
          localStorage.setItem('userData', JSON.stringify(user));
          break;
        } else {
          this.message = 'Wrong password!';
          break;
        }
      } else {
        this.message = 'Login unsuccessful! Email doesn\'t exists.';
      }
    }

    this.loginForm.reset();
  }

  onLogout() {
    // remove from the store
    this.store.dispatch(new fromStore.LogoutUser());

    // remove from localStorage
    localStorage.removeItem('userData');

    this.userLoggedIn = false;
  }

  private buildForm(email = '', password = '') {
    this.loginForm = new FormGroup({
      email: new FormControl(email, Validators.required),
      password: new FormControl(password, Validators.required),
    });
  }
}
