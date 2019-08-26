import { CountriesEffects } from './countries/effects';
import { GamesEffects } from './games/effects';

export const effects: any[] = [CountriesEffects, GamesEffects];

export * from './games/actions';
export * from './games/effects';
export * from './games/reducers';
export * from './games/selectors';

export * from './countries/actions';
export * from './countries/effects';
export * from './countries/reducers';
export * from './countries/selectors';
