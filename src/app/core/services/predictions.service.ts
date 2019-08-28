import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Prediction } from 'src/app/games/models/prediction.model';

@Injectable({ providedIn: 'root' })
export class PredictionsService {
  urlPredictions = 'http://localhost:3000/predictions';

  constructor(private http: HttpClient) {}

  // Add = update v resnici, ker updatea Game s tem ko mu doda še score
  addPrediction(payload: Prediction): Observable<Prediction> {
    return this.http
      .put<Prediction>(`${this.urlPredictions}/${payload.id}`, payload)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
