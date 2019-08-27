import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromCore from '../reducers/core.reducer';

export const getUsersState = createFeatureSelector('users');

export const getUserEntities = createSelector(
  getUsersState,
  fromCore.getUsersEntities
);

export const getAllUsers = createSelector(
  getUserEntities,
  entities => {
    return Object.keys(entities).map(id => entities[id]);
  }
);

export const getSelectedUser: (
  key: number
) => MemoizedSelector<fromFeature.UserState, any> = (id: number) =>
  createSelector(
    getUsersState,
    (state: fromCore.UserState) => {
      return state.entities[id];
    }
  );
