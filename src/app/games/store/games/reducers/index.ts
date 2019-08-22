import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromGames from './games.reducer';

export interface AllGamesState {
  games: fromGames.GameState;
}

export const reducers: ActionReducerMap<AllGamesState> = {
  games: fromGames.reducer,
};

export const getGamesState = createFeatureSelector<AllGamesState>('games');
