import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { GamesRoutingModule } from './routing/games-routing.module';

// components
import { GamesComponent } from './containers/games-container/games.component';
import { GameSingleComponent } from './components/game-single/game-single.component';

// store
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers, effects } from '../games/store';

@NgModule({
  declarations: [GamesComponent, GameSingleComponent],
  imports: [
    SharedModule,
    GamesRoutingModule,
    StoreModule.forFeature('games', reducers),
    EffectsModule.forFeature(effects),
  ],
  exports: [GamesComponent],
})
export class GamesModule {}
