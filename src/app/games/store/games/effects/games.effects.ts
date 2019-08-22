import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';

import * as GameActions from '../actions/games.actions';

import { GamesService } from 'src/app/core/services/games.service';
import { of } from 'rxjs';

@Injectable()
export class GamesEffects {
  constructor(private actions$: Actions, private gamesService: GamesService) {}

  @Effect()
  fetchGames$ = this.actions$.pipe(
    ofType(GameActions.FETCH_GAMES),
    switchMap(() => {
      return this.gamesService.fetchGames().pipe(
        map(games => new GameActions.FetachGamesSuccess(games)),
        catchError(error => of(new GameActions.FetachGamesFail(error)))
      );
    })
  );
}
