import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { GamesService } from 'src/app/core/services/games.service';

import * as CountriesActions from '../actions/countries.actions';

@Injectable()
export class CountriesEffects {
  constructor(private actions$: Actions, private gamesService: GamesService) {}

  @Effect()
  fetchCountry$ = this.actions$.pipe(
    ofType(CountriesActions.FETCH_COUNTRY),
    map((action: CountriesActions.FetchCountry) => action.payload),
    switchMap(id => {
      return this.gamesService.getCountry(id).pipe(
        map(country => new CountriesActions.FetchCountrySuccess(country)),
        catchError(error => of(new CountriesActions.FetchCountryFail(error)))
      );
    })
  );

  @Effect()
  fetchCountries$ = this.actions$.pipe(
    ofType(CountriesActions.FETCH_COUNTRIES),
    switchMap(() => {
      return this.gamesService.getCountries().pipe(
        map(countries => new CountriesActions.FetchCountriesSuccess(countries)),
        catchError(error => of(new CountriesActions.FetchCountriesFail(error)))
      );
    })
  );
}
