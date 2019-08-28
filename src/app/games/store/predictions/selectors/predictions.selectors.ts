import { createFeatureSelector, createSelector } from '@ngrx/store';

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
