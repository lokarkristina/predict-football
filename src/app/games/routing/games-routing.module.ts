import { NgModule } from '@angular/core';

// router
import { RouterModule, Routes } from '@angular/router';

// components
import { GameSingleComponent } from '../components/game-single/game-single.component';

const routes: Routes = [
  {
    path: 'game/:id',
    component: GameSingleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesRoutingModule {}
