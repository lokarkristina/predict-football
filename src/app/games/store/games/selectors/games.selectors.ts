import {
  createSelector,
  MemoizedSelector,
  createFeatureSelector,
} from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromGames from '../reducers/games.reducer';

export const getGamesState = createFeatureSelector('games');

export const getGameEntities = createSelector(
  getGamesState,
  fromGames.getGamesEntities
);

export const getAllGames = createSelector(
  getGameEntities,
  entities => {
    return Object.keys(entities).map(id => entities[id]);
  }
);

export const getSelectedGame: (
  key: number
) => MemoizedSelector<fromFeature.GameState, any> = (id: number) =>
  createSelector(
    getGamesState,
    (state: fromGames.GameState) => {
      return state.entities[id];
    }
  );
