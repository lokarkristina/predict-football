import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { PredictionsService } from 'src/app/core/services/predictions.service';

import * as PredictionActions from '../actions/predictions.actions';

@Injectable()
export class PredictionsEffects {
  constructor(
    private actions$: Actions,
    private predictionsService: PredictionsService
  ) {}

  @Effect()
  addPrediction$ = this.actions$.pipe(
    ofType(PredictionActions.ADD_PREDICTION),
    map((action: PredictionActions.AddPrediction) => action.payload),
    switchMap(prediction => {
      return this.predictionsService.addPrediction(prediction).pipe(
        map(
          prediction => new PredictionActions.AddPredictionSuccess(prediction)
        ),
        catchError(error => of(new PredictionActions.AddPredictionFail(error)))
      );
    })
  );

  @Effect()
  updatePrediction$ = this.actions$.pipe(
    ofType(PredictionActions.UPDATE_PREDICTION),
    map((action: PredictionActions.UpdatePrediction) => action.payload),
    switchMap(prediction => {
      return this.predictionsService.updatePrediction(prediction).pipe(
        map(
          prediction =>
            new PredictionActions.UpdatePredictionSuccess(prediction)
        ),
        catchError(error =>
          of(new PredictionActions.UpdatePredictionFail(error))
        )
      );
    })
  );

  @Effect()
  fetchPredictions$ = this.actions$.pipe(
    ofType(PredictionActions.FETCH_PREDICTIONS),
    switchMap(() => {
      return this.predictionsService
        .fetchPredictions()
        .pipe(
          map(
            predictions =>
              new PredictionActions.FetchPredictionsSuccess(predictions),
            catchError(error =>
              of(new PredictionActions.FetchPredictionsFail(error))
            )
          )
        );
    })
  );

  @Effect()
  fetchPrediction$ = this.actions$.pipe(
    ofType(PredictionActions.FETCH_PREDICTION),
    switchMap(id => {
      return this.predictionsService.fetchPrediction(id).pipe(
        map(
          prediction => new PredictionActions.FetchPredictionSuccess(prediction)
        ),
        catchError(error =>
          of(new PredictionActions.FetchPredictionFail(error))
        )
      );
    })
  );

  @Effect()
  deletePrediction$ = this.actions$.pipe(
    ofType(PredictionActions.DELETE_PREDICTION),
    map((action: PredictionActions.DeletePrediction) => action.payload),
    switchMap(id => {
      return this.predictionsService.deletePrediction(id).pipe(
        map(() => new PredictionActions.DeletePredictionSuccess(id)),
        catchError(error =>
          of(new PredictionActions.DeletePredictionFail(error))
        )
      );
    })
  );
}
