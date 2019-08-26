import { Country } from '../../../models/country.model';

import * as fromCountries from '../actions/countries.actions';

export interface CountriesState {
  entities: { [id: number]: Country };
  loaded: boolean;
  loading: boolean;
}

export const initialStateCountries: CountriesState = {
  entities: {},
  loaded: false,
  loading: false,
};

export function CountriesReducer(
  state = initialStateCountries,
  action: fromCountries.CountriesActions
): CountriesState {
  switch (action.type) {
    // Add fetch country in fetch country fail
    case fromCountries.FETCH_COUNTRY_SUCCESS: {
      const country = action.payload;
      const entities = {
        ...state.entities,
        [country.id]: country,
      };

      return {
        ...state,
        entities,
      };
    }

    case fromCountries.FETCH_COUNTRIES: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromCountries.FETCH_COUNTRIES_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false,
      };
    }

    case fromCountries.FETCH_COUNTRIES_SUCCESS: {
      const countries = action.payload;
      const entities = countries.reduce(
        (entities: { [id: number]: Country }, country: Country) => {
          return {
            ...entities,
            [country.id]: country,
          };
        },
        { ...state.entities }
      );

      return {
        ...state,
        loading: false,
        loaded: true,
        entities,
      };
    }

    default:
      return state;
  }
}

export const getCountriesEntities = (state: CountriesState) => state.entities;
export const getCountriesLoaded = (state: CountriesState) => state.loaded;
export const getCountriesLoading = (state: CountriesState) => state.loading;
