import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

// store
import { Store } from '@ngrx/store';

import * as fromStore from '../../store';

// models
import { User } from '../../models/user.model';

@Injectable()
export class UserResolver implements Resolve<boolean> {
  constructor(private store: Store<User[]>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.store.dispatch(new fromStore.FetchUsers());

    return true;
  }
}
