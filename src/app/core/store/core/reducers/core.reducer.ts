import { User } from '../../../models/user.model';

import * as fromCore from '../actions/core.actions';

export interface UserState {
  entities: { [id: number]: User };
  loaded: boolean;
  loading: boolean;
  loggedInUser: User | null;
}

export const initialStateUser: UserState = {
  entities: {},
  loaded: false,
  loading: false,
  loggedInUser: null,
};

export function UsersReducer(
  state = initialStateUser,
  action: fromCore.CoreActions
): UserState {
  switch (action.type) {
    case fromCore.FETCH_USER_SUCCESS: {
      const user = action.payload;
      const entities = {
        ...state.entities,
        [user.id]: user,
      };

      return {
        ...state,
        entities,
      };
    }

    case fromCore.FETCH_USERS: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromCore.FETCH_USERS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }

    case fromCore.FETCH_USERS_SUCCESS: {
      const users = action.payload;
      const entities = users.reduce(
        (entities: { [id: number]: User }, user: User) => {
          return {
            ...entities,
            [user.id]: user,
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

    case fromCore.LOGIN_USER: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromCore.LOGIN_USER_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
        loggedInUser: null,
      };
    }

    case fromCore.LOGIN_USER_SUCCESS: {
      const user = action.payload;

      return {
        ...state,
        loaded: true,
        loading: false,
        loggedInUser: user,
      };
    }

    case fromCore.LOGOUT_USER: {
      return {
        ...state,
        loading: true,
        loggedInUser: undefined,
      };
    }

    default:
      return state;
  }
}

export const getUsersEntities = (state: UserState) => state.entities;
export const getUsersLoaded = (state: UserState) => state.loaded;
export const getUsersLoading = (state: UserState) => state.loading;
