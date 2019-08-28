import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Prediction } from 'src/app/games/models/prediction.model';

@Injectable({ providedIn: 'root' })
export class PredictionsService {
  urlPredictions = 'http://localhost:3000/predictions';

  constructor(private http: HttpClient) {}

  addPrediction(payload: Prediction): Observable<Prediction> {
    return this.http
      .post<Prediction>(`${this.urlPredictions}`, payload)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  fetchPredictions(): Observable<Prediction[]> {
    return this.http
      .get<Prediction[]>(this.urlPredictions)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  fetchPrediction(id: number): Observable<Prediction> {
    return this.http
      .get<Prediction>(`${this.urlPredictions}/${id}`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
