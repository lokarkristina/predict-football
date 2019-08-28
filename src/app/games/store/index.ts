import { CountriesEffects } from './countries/effects';
import { GamesEffects } from './games/effects';
import { PredictionsEffects } from './predictions/effects';

export const effectsGames: any[] = [
  CountriesEffects,
  GamesEffects,
  PredictionsEffects,
];

export * from './games/actions';
export * from './games/effects';
export * from './games/reducers';
export * from './games/selectors';

export * from './countries/actions';
export * from './countries/effects';
export * from './countries/reducers';
export * from './countries/selectors';

export * from './predictions/actions';
export * from './predictions/effects';
export * from './predictions/reducers';
export * from './predictions/selectors';
