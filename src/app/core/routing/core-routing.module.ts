import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { LoginComponent } from '../components/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/games',
    pathMatch: 'full',
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
