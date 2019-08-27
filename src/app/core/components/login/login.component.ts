import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import * as fromStore from '../../store';

import { User } from '../../models/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user: User;

  constructor(private store: Store<fromStore.UserState>) {}

  ngOnInit() {
    this.store.select(fromStore.getAllUsers);
    this.buildForm();
  }

  onSubmit(email, password) {
    email = email.value;
    password = password.value;

    console.log(email);
    console.log(password);

    const user = {
      email,
      password,
    };
  }

  private buildForm(email = '', password = '') {
    this.loginForm = new FormGroup({
      email: new FormControl(email, Validators.required),
      password: new FormControl(password, Validators.required),
    });
  }
}
