import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// store
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { effectsGames } from './store';

// reducers
import { GamesReducer } from '../games/store/games/reducers/games.reducer';
import { CountriesReducer } from '../games/store/countries/reducers/countries.reducer';
import { PredictionsReducer } from '../games/store/predictions/reducers/predictions.reducers';

import { SharedModule } from '../shared/shared.module';
import { GamesRoutingModule } from './routing/games-routing.module';

// resolvers
import { GameSingleResolver } from './routing/resolvers/game-single.resolver';

// components
import { GamesComponent } from './containers/games-container/games.component';
import { GameSingleComponent } from './containers/game-single/game-single.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { PredictionAddComponent } from './components/prediction-add/prediction-add.component';
import { PredictionsComponent } from './components/predictions/predictions.component';

@NgModule({
  declarations: [
    GamesComponent,
    GameSingleComponent,
    GameDetailsComponent,
    PredictionAddComponent,
    PredictionsComponent,
  ],
  imports: [
    SharedModule,
    GamesRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('games', GamesReducer),
    StoreModule.forFeature('countries', CountriesReducer),
    StoreModule.forFeature('predictions', PredictionsReducer),
    EffectsModule.forFeature(effectsGames),
  ],
  exports: [GamesComponent],
  providers: [GameSingleResolver],
})
export class GamesModule {}
