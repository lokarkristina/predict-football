import {
  createSelector,
  MemoizedSelector,
  createFeatureSelector,
} from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromGames from '../reducers/games.reducer';

import { Game } from 'src/app/games/models/game.model';

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

// export const GetSelectedGameUser: (
//   id: number,
//   userId: number
// ) => MemoizedSelector<fromFeature.GameState, any> = (
//   id: number,
//   userId: number
// ) =>
//   createSelector(
//     getAllGames,
//     entities => {
//       const game = entities.filter(item => {
//         if (item.id == id && item.userId == userId) {
//           return item;
//         }
//       });

//       console.log(game[0]);
//       return game[0];
//     }
//   );
