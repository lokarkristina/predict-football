import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CoreRoutingModule } from './routing/core-routing.module';
import { GamesModule } from '../games/games.module';

// components
import { HomepageComponent } from './containers/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [HomepageComponent, HeaderComponent, LoginComponent],
  imports: [SharedModule, CoreRoutingModule, GamesModule],
  exports: [HomepageComponent, HeaderComponent],
})
export class CoreModule {}
