import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';

import * as fromStore from '../../store';

import { Game } from '../../models/game.model';

@Injectable()
export class GameSingleResolver implements Resolve<boolean> {
  constructor(private store: Store<Game>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const gameId = route.params.id;
    this.store.dispatch(new fromStore.FetchGame(gameId));

    // Countries should be already in?
    this.store.dispatch(new fromStore.FetchCountries());

    return true;
  }
}
