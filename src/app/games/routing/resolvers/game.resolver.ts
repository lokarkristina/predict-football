import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

// store
import { Store } from '@ngrx/store';

// models
import { Game } from '../../models/game.model';

import * as fromStore from '../../store';

@Injectable()
export class GameResolver implements Resolve<boolean> {
  constructor(private store: Store<Game[]>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.store.dispatch(new fromStore.FetchCountries());
    this.store.dispatch(new fromStore.FetchPredictions());
    this.store.dispatch(new fromStore.FetchGames());

    return true;
  }
}
