import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Game } from '../../games/models/game.model';
import { Country } from 'src/app/games/models/country.model';

@Injectable({ providedIn: 'root' })
export class GamesService {
  urlGames = 'http://localhost:3333/games';
  urlCountries = 'http://localhost:3333/countries';

  constructor(private http: HttpClient) {}

  fetchGames(): Observable<Game[]> {
    return this.http
      .get<Game[]>(this.urlGames)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  fetchGame(id: number): Observable<Game> {
    return this.http
      .get<Game>(`${this.urlGames}/${id}`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  getCountry(id: number) {
    return this.http
      .get<Country>(`${this.urlCountries}/${id}`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  getCountries(): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${this.urlCountries}`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
