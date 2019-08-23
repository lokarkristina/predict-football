import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { CoreStoreModule } from './store/core-store.module';

import { SharedModule } from '../shared/shared.module';
import { CoreRoutingModule } from './routing/core-routing.module';
import { GamesModule } from '../games/games.module';

// components
import { HomepageComponent } from './containers/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';

// resolvers
import { GameResolver } from '../games/routing/resolvers/game.resolver';

@NgModule({
  declarations: [HomepageComponent, HeaderComponent, LoginComponent],
  imports: [
    SharedModule,
    HttpClientModule,
    CoreRoutingModule,
    CoreStoreModule,
    ReactiveFormsModule,
    GamesModule,
  ],
  exports: [HomepageComponent, HeaderComponent],
  providers: [GameResolver],
})
export class CoreModule {}
