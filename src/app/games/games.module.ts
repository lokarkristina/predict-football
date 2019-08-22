import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { GamesRoutingModule } from './routing/games-routing.module';

// components
import { GamesComponent } from './containers/games-container/games.component';
import { GameSingleComponent } from './components/game-single/game-single.component';

@NgModule({
  declarations: [GamesComponent, GameSingleComponent],
  imports: [SharedModule, GamesRoutingModule],
  exports: [GamesComponent],
})
export class GamesModule {}
