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

    case fromPredictions.UPDATE_PREDICTION: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromPredictions.UPDATE_PREDICTION_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false,
      };
    }

    case fromPredictions.UPDATE_PREDICTION_SUCCESS: {
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

    case fromPredictions.FETCH_PREDICTIONS: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromPredictions.FETCH_PREDICTIONS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }

    case fromPredictions.FETCH_PREDICTIONS_SUCCESS: {
      const predictions = action.payload;
      const entities = predictions.reduce(
        (entities: { [id: number]: Prediction }, prediction: Prediction) => {
          return {
            ...entities,
            [prediction.id]: prediction,
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

    case fromPredictions.FETCH_PREDICTION_SUCCESS: {
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

    case fromPredictions.DELETE_PREDICTION_SUCCESS: {
      const id = +action.payload;
      const { [id]: removed, ...entities } = state.entities;

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
