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
}
