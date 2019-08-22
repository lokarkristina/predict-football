import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromGames from '../reducers/games.reducer';

export const getAllGamesState = createSelector(
  fromFeature.getGamesState,
  (state: fromFeature.AllGamesState) => state.games
);

export const getAllGamesEntities = createSelector(
  getAllGamesState,
  fromGames.getGamesEntities
);

export const getAllGames = createSelector(
  getAllGamesEntities,
  entities => {
    return Object.keys(entities).map(id => entities[id]);
  }
);
