import { Injectable } from "@angular/core";

import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';

import { UserService } from 'src/app/core/services/user.service';

import * as CoreActions from '../actions/core.actions'

@Injectable()
export class CoreEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  @Effect()
  userLogin$ = this.actions$.pipe(
    ofType(CoreActions.USER_LOGIN),
    switchMap(() => {
      return this.userService.getUser()
    })
  )
}
