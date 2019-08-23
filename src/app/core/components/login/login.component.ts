import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

// import * as fromStore '../../store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  ngOnInit() {
    this.buildForm();
  }

  onSubmit(email, password) {
    email = email.value;
    password = password.value;
  }

  private buildForm(email = '', password = '') {
    this.loginForm = new FormGroup({
      email: new FormControl(email, Validators.required),
      password: new FormControl(password, Validators.required),
    });
  }
}
