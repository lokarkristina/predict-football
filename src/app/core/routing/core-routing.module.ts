import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { HomepageComponent } from '../containers/homepage/homepage.component';
import { LoginComponent } from '../components/login/login.component';

// resolvers
import { GameResolver } from 'src/app/games/routing/resolvers/game.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    resolve: {
      gameResolver: GameResolver,
    },
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
