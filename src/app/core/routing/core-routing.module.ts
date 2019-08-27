import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// resolvers
import { UserResolver } from './resolvers/users.resolver';

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
    resolve: { userResolver: UserResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
