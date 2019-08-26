import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import * as fromCountries from '../reducers/countries.reducer';

export const getCountriesState = createFeatureSelector('countries');

export const getCountryEntities = createSelector(
  getCountriesState,
  fromCountries.getCountriesEntities
);

export const getAllCountries = createSelector(
  getCountryEntities,
  entities => {
    return Object.keys(entities).map(id => entities[id]);
  }
);

export const getSelectedCountry = (id: number) =>
  createSelector(
    getAllCountries,
    entities => {
      return entities[id];
    }
  );
