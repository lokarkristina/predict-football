// Core
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [],
  imports: [SharedModule],
})
export class CoreStoreModule {}
