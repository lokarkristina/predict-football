import { NgModule } from '@angular/core';

// store
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers, effects } from '../games/store';

import { SharedModule } from '../shared/shared.module';
import { GamesRoutingModule } from './routing/games-routing.module';

// resolvers
import { GameSingleResolver } from './routing/resolvers/game-single.resolver';

// components
import { GamesComponent } from './containers/games-container/games.component';
import { GameSingleComponent } from './components/game-single/game-single.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';

@NgModule({
  declarations: [GamesComponent, GameSingleComponent, GameDetailsComponent],
  imports: [
    SharedModule,
    GamesRoutingModule,
    StoreModule.forFeature('games', reducers),
    EffectsModule.forFeature(effects),
  ],
  exports: [GamesComponent],
  providers: [GameSingleResolver],
})
export class GamesModule {}
