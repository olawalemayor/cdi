import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, LoginComponent } from './components';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path: 'cases',
    loadChildren: () =>
      import('./modules/cases.module').then((m) => m.CaseModule),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./modules/user.module').then((m) => m.UserModule),
  },
  {
    path: 'profile',
    component: ProfileComponent,
    children: [{ path: ':id', component: ProfileComponent }],
  },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
