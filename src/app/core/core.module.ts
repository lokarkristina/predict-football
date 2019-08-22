import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';

// components
import { HomepageComponent } from './containers/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [HomepageComponent, HeaderComponent, LoginComponent],
  imports: [SharedModule, CoreRoutingModule],
  exports: [HomepageComponent, HeaderComponent],
})
export class CoreModule {}
