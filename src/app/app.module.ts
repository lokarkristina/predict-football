import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { GamesModule } from './games/games.module';

// components
import { AppComponent } from './app.component';

// not used in production
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';

// this would be done dynamically with webpack for builds
const environment = {
  development: true,
  production: false,
};

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    GamesModule,
    StoreModule.forRoot({}, { metaReducers }),
    EffectsModule.forRoot([]),
    environment.development ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
