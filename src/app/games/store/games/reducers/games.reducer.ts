import { Game } from '../../../models/game.model';

import * as fromGames from '../actions/games.actions';

export interface GameState {
  entities: { [id: number]: Game };
  loaded: boolean;
  loading: boolean;
}

export const initialState: GameState = {
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromGames.GamesActions
): GameState {
  switch (action.type) {
    case fromGames.FETCH_GAMES: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromGames.FETCH_GAMES_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false,
      };
    }

    case fromGames.FETCH_GAMES_SUCCESS: {
      const games = action.payload;
      const entities = games.reduce(
        (entities: { [id: number]: Game }, game: Game) => {
          return {
            ...entities,
            [game.id]: game,
          };
        },
        { ...state.entities }
      );

      return {
        ...state,
        loading: false,
        loaded: true,
        entities,
      };
    }

    default:
      return state;
  }
}

export const getGamesEntities = (state: GameState) => state.entities;
export const getGamesLoaded = (state: GameState) => state.loaded;
export const getGamesLoading = (state: GameState) => state.loading;
