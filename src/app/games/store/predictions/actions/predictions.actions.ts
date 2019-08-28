import { Action } from '@ngrx/store';

import { Prediction } from 'src/app/games/models/prediction.model';

// Add prediction
export const ADD_PREDICTION = '[Games] Add Prediction';
export const ADD_PREDICTION_FAIL = '[Games] Add Prediction Fail';
export const ADD_PREDICTION_SUCCESS = '[Games] Add Prediction Success';

export class AddPrediction implements Action {
  readonly type = ADD_PREDICTION;
  constructor(public payload: Prediction) {}
}

export class AddPredictionFail implements Action {
  readonly type = ADD_PREDICTION_FAIL;
  constructor(public payload: any) {}
}

export class AddPredictionSuccess implements Action {
  readonly type = ADD_PREDICTION_SUCCESS;
  constructor(public payload: Prediction) {}
}

// Fetch Predictions
export const FETCH_PREDICTIONS = '[Games] Fetch Predictions';
export const FETCH_PREDICTIONS_FAIL = '[Games] Fetch Predictions Fail';
export const FETCH_PREDICTIONS_SUCCESS = '[Games] Fetch Predictions Success';

export class FetchPredictions implements Action {
  readonly type = FETCH_PREDICTIONS;
}

export class FetchPredictionsFail implements Action {
  readonly type = FETCH_PREDICTIONS_FAIL;
  constructor(public payload: any) {}
}

export class FetchPredictionsSuccess implements Action {
  readonly type = FETCH_PREDICTIONS_SUCCESS;
  constructor(public payload: Prediction[]) {}
}

// Fetch Prediction
export const FETCH_PREDICTION = '[Games] Fetch Prediction';
export const FETCH_PREDICTION_FAIL = '[Games] Fetch Prediction Fail';
export const FETCH_PREDICTION_SUCCESS = '[Games] Fetch Prediction Success';

export class FetchPrediction implements Action {
  readonly type = FETCH_PREDICTION;
  constructor(public payload: number) {}
}

export class FetchPredictionFail implements Action {
  readonly type = FETCH_PREDICTION_FAIL;
  constructor(public payload: any) {}
}

export class FetchPredictionSuccess implements Action {
  readonly type = FETCH_PREDICTION_SUCCESS;
  constructor(public payload: Prediction) {}
}

// Update Prediction
export const UPDATE_PREDICTION = '[Game] Update perdiction';
export const UPDATE_PREDICTION_FAIL = '[Game] Update perdiction Fail';
export const UPDATE_PREDICTION_SUCCESS = '[Game] Update perdiction Success';

export class UpdatePrediction implements Action {
  readonly type = UPDATE_PREDICTION;
  constructor(public payload: Prediction) {}
}

export class UpdatePredictionFail implements Action {
  readonly type = UPDATE_PREDICTION_FAIL;
  constructor(public payload: any) {}
}

export class UpdatePredictionSuccess implements Action {
  readonly type = UPDATE_PREDICTION_SUCCESS;
  constructor(public payload: Prediction) {}
}

export type PredictioinsActions =
  | AddPrediction
  | AddPredictionFail
  | AddPredictionSuccess
  | FetchPredictions
  | FetchPredictionsFail
  | FetchPredictionsSuccess
  | FetchPrediction
  | FetchPredictionFail
  | FetchPredictionSuccess
  | UpdatePrediction
  | UpdatePredictionFail
  | UpdatePredictionSuccess;
