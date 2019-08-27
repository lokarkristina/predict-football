import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromStore from '../../store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  userLoggedIn: boolean;

  constructor(private store: Store<fromStore.UserState>) {}

  ngOnInit() {
    this.store
      .select(fromStore.getLoggedInUser)
      .subscribe(user => user && (this.userLoggedIn = true));
  }
}
