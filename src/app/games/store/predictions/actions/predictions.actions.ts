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

export type PredictioinsActions =
  | AddPrediction
  | AddPredictionFail
  | AddPredictionSuccess;
