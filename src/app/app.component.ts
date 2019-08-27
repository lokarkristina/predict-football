import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import * as fromStore from './core/store';

import { User } from './core/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store<fromStore.UserState>) {}

  ngOnInit() {
    // Auto login if user in localStorage
    const userData: User = JSON.parse(localStorage.getItem('userData'));
    userData && this.store.dispatch(new fromStore.LoginUser(userData.id));
  }
}
