import { Action } from '@ngrx/store';

import { Game } from '../../../models/game.model';

export const FETCH_GAMES = '[Games] Fetch Games';
export const FETCH_GAMES_FAIL = '[Games] Fetch Games Fail';
export const FETCH_GAMES_SUCCESS = '[Games] Fetch Games Success';

export class FetchGames implements Action {
  readonly type = FETCH_GAMES;
}

export class FetachGamesFail implements Action {
  readonly type = FETCH_GAMES_FAIL;
  constructor(public payload: any) {}
}

export class FetachGamesSuccess implements Action {
  readonly type = FETCH_GAMES_SUCCESS;
  constructor(public payload: Game[]) {}
}

export type GamesActions = FetchGames | FetachGamesFail | FetachGamesSuccess;
