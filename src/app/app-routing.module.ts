import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './core/containers/homepage/homepage.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: './core/core.module#CoreModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
