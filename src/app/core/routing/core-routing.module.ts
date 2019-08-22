import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { HomepageComponent } from '../containers/homepage/homepage.component';
import { LoginComponent } from '../components/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
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
