import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { UserService } from 'src/app/core/services/user.service';

import * as CoreActions from '../actions/core.actions';

@Injectable()
export class CoreEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  @Effect()
  fetchUsers$ = this.actions$.pipe(
    ofType(CoreActions.FETCH_USERS),
    switchMap(() => {
      return this.userService.fetchUsers().pipe(
        map(users => new CoreActions.FetchUsersSuccess(users)),
        catchError(error => of(new CoreActions.FetchUsersFail(error)))
      );
    })
  );

  @Effect()
  fetchUser$ = this.actions$.pipe(
    ofType(CoreActions.FETCH_USER),
    map((action: CoreActions.FetchUser) => action.payload),
    switchMap(id => {
      return this.userService.fetchUser(id).pipe(
        map(user => new CoreActions.FetchUserSuccess(user)),
        catchError(error => of(new CoreActions.FetchUserFail(error)))
      );
    })
  );
}
