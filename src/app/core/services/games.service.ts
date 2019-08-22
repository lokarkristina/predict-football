import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Game } from '../../games/models/game.model';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class GamesService {
  url = 'http://localhost:3000/predictions';

  constructor(private http: HttpClient) {}

  fetchGames(): Observable<Game[]> {
    return this.http
      .get<Game[]>(this.url)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
