import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';

import { Game } from '../../models/game.model';
import * as fromStore from '../../store';

@Injectable()
export class GameSingleResolver implements Resolve<boolean> {
  constructor(private store: Store<Game[]>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const id = route.params.id;
    this.store.dispatch(new fromStore.FetchGame(id));

    return true;
  }
}
