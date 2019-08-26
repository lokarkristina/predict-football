import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as GameActions from '../actions/games.actions';

import { GamesService } from 'src/app/core/services/games.service';

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

  @Effect()
  fetchGame$ = this.actions$.pipe(
    ofType(GameActions.FETCH_GAME),
    map((action: GameActions.FetchGame) => action.payload),
    switchMap(id => {
      return this.gamesService.fetchGame(id).pipe(
        map(game => new GameActions.FetchGameSuccess(game)),
        catchError(error => of(new GameActions.FetchGameFail(error)))
      );
    })
  );

  @Effect()
  addPrediction$ = this.actions$.pipe(
    ofType(GameActions.ADD_PREDICTION),
    map((action: GameActions.AddPrediction) => action.payload),
    switchMap(prediction => {
      return this.gamesService.addPrediction(prediction).pipe(
        map(prediction => new GameActions.AddPredictionSuccess(prediction)),
        catchError(error => of(new GameActions.AddPredictionFail(error)))
      );
    })
  );
}
