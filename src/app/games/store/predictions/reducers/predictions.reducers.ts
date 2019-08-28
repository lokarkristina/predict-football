import { Prediction } from 'src/app/games/models/prediction.model';

import * as fromPredictions from '../actions/predictions.actions';

export interface PredictionState {
  entities: { [id: number]: Prediction };
  loaded: boolean;
  loading: boolean;
}

export const initialStatePredictions: PredictionState = {
  entities: {},
  loaded: false,
  loading: false,
};

export function PredictionsReducer(
  state = initialStatePredictions,
  action: fromPredictions.PredictioinsActions
): PredictionState {
  switch (action.type) {
    case fromPredictions.ADD_PREDICTION_SUCCESS: {
      const prediction = action.payload;
      const entities = {
        ...state.entities,
        [prediction.id]: prediction,
      };

      return {
        ...state,
        entities,
      };
    }

    default:
      return state;
  }
}

export const getPredictionsEntities = (state: PredictionState) =>
  state.entities;
export const getPredictionsLoaded = (state: PredictionState) => state.loaded;
export const getPredictionsLoading = (state: PredictionState) => state.loading;
