import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Game } from '../../games/models/game.model';
import { Country } from 'src/app/games/models/country.model';

@Injectable({ providedIn: 'root' })
export class GamesService {
  urlPredictions = 'http://localhost:3000/predictions';
  urlCountries = 'http://localhost:3000/countries';

  constructor(private http: HttpClient) {}

  fetchGames(): Observable<Game[]> {
    return this.http
      .get<Game[]>(this.urlPredictions)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  fetchGame(id: number): Observable<Game> {
    return this.http
      .get<Game>(`${this.urlPredictions}/${id}`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  getCountry(id: number) {
    return this.http
      .get<Country>(`${this.urlCountries}/${id}`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  // Add = update v resnice, ker updatea Game s tem ko mu doda še score
  addPrediction(payload: Game): Observable<Game> {
    return this.http
      .put<Game>(`${this.urlPredictions}/${payload.id}`, payload)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
