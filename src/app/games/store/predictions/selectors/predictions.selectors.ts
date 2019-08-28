import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import * as fromPredictions from '../reducers/predictions.reducers';

export const getPredictionsState = createFeatureSelector('predictions');

export const getPredictionEntities = createSelector(
  getPredictionsState,
  fromPredictions.getPredictionsEntities
);

export const getAllPredictions = createSelector(
  getPredictionEntities,
  entities => {
    return Object.keys(entities).map(id => entities[id]);
  }
);

export const getGamePredictions: (
  id: number
) => MemoizedSelector<fromPredictions.PredictionState, any> = (id: number) =>
  createSelector(
    getAllPredictions,
    entities => {
      const predictions = [];

      entities.map(item => {
        if (item.gameId == id) {
          predictions.push(item);
        }
      });

      return predictions;
    }
  );
