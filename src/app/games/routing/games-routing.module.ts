import { NgModule } from '@angular/core';

// router
import { RouterModule, Routes } from '@angular/router';

// resolvers
import { GameResolver } from './resolvers/game.resolver';
import { GameSingleResolver } from './resolvers/game-single.resolver';

// components
import { GameSingleComponent } from '../components/game-single/game-single.component';
import { GamesComponent } from '../containers/games-container/games.component';

const routes: Routes = [
  {
    path: '',
    component: GamesComponent,
    resolve: {
      gameResolver: GameResolver,
    },
  },
  {
    path: 'games/:id',
    component: GameSingleComponent,
    resolve: {
      gameResolver: GameSingleResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesRoutingModule {}
