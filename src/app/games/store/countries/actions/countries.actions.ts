import { Action } from '@ngrx/store';
import { Country } from 'src/app/games/models/country.model';

// Fecth Country
export const FETCH_COUNTRY = '[Countries] Fetch Country';
export const FETCH_COUNTRY_FAIL = '[Countries] Fetch Country Fail';
export const FETCH_COUNTRY_SUCCESS = '[Countries] Fetch Country Success';

export class FetchCountry implements Action {
  readonly type = FETCH_COUNTRY;
  constructor(public payload: number) {}
}

export class FetchCountryFail implements Action {
  readonly type = FETCH_COUNTRY_FAIL;
  constructor(public payload: any) {}
}

export class FetchCountrySuccess implements Action {
  readonly type = FETCH_COUNTRY_SUCCESS;
  constructor(public payload: Country) {}
}

// Fecth Country
export const FETCH_COUNTRIES = '[Countries] Fetch Countries';
export const FETCH_COUNTRIES_FAIL = '[Countries] Fetch Countries Fail';
export const FETCH_COUNTRIES_SUCCESS = '[Countries] Fetch Countries Success';

export class FetchCountries implements Action {
  readonly type = FETCH_COUNTRIES;
}

export class FetchCountriesFail implements Action {
  readonly type = FETCH_COUNTRIES_FAIL;
  constructor(public payload: any) {}
}

export class FetchCountriesSuccess implements Action {
  readonly type = FETCH_COUNTRIES_SUCCESS;
  constructor(public payload: Country[]) {}
}

export type CountriesActions =
  | FetchCountry
  | FetchCountryFail
  | FetchCountrySuccess
  | FetchCountries
  | FetchCountriesFail
  | FetchCountriesSuccess;
