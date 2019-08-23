import { Action } from '@ngrx/store';

import { Game } from '../../../models/game.model';

// Fetch Games
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

// Fetach Game
export const FETCH_GAME = '[Games] Fetch Game';
export const FETCH_GAME_FAIL = '[Games] Fetch Game Fail';
export const FETCH_GAME_SUCCESS = '[Games] Fetch Game Success';

export class FetchGame implements Action {
  readonly type = FETCH_GAME;
  constructor(public payload: number) {}
}

export class FetchGameFail implements Action {
  readonly type = FETCH_GAMES_FAIL;
  constructor(public payload: any) {}
}

export class FetchGameSuccess implements Action {
  readonly type = FETCH_GAME_SUCCESS;
  constructor(public payload: Game) {}
}

// Add prediction
export const ADD_PREDICTION = '[Games] Add Prediction';
export const ADD_PREDICTION_FAIL = '[Games] Add Prediction Fail';
export const ADD_PREDICTION_SUCCESS = '[Games] Add Prediction Success';

export class AddPrediction implements Action {
  readonly type = ADD_PREDICTION;
  constructor(public payload: Game) {}
}

export class AddPredictionFail implements Action {
  readonly type = ADD_PREDICTION_FAIL;
  constructor(public payload: any) {}
}

export class AddPredictionSuccess implements Action {
  readonly type = ADD_PREDICTION_SUCCESS;
  constructor(public payload: Game) {}
}

export type GamesActions =
  | FetchGames
  | FetachGamesFail
  | FetachGamesSuccess
  | FetchGame
  | FetchGameFail
  | FetchGameSuccess
  | AddPrediction
  | AddPredictionFail
  | AddPredictionSuccess;
