import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// store
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { effectsCore } from './store';

// reducers
import { UsersReducer } from './store/core/reducers/core.reducer';

import { SharedModule } from '../shared/shared.module';
import { CoreRoutingModule } from './routing/core-routing.module';
import { GamesModule } from '../games/games.module';

// components
import { HomepageComponent } from './containers/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';

// resolvers
import { GameResolver } from '../games/routing/resolvers/game.resolver';
import { UserResolver } from './routing/resolvers/users.resolver';

@NgModule({
  declarations: [HomepageComponent, HeaderComponent, LoginComponent],
  imports: [
    SharedModule,
    HttpClientModule,
    CoreRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('users', UsersReducer),
    EffectsModule.forFeature(effectsCore),
    GamesModule,
  ],
  exports: [HomepageComponent, HeaderComponent],
  providers: [GameResolver, UserResolver],
})
export class CoreModule {}
