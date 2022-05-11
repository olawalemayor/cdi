import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, LoginComponent } from './components';
import { ProfileComponent } from './components/profile/profile.component';
import { UserGuard } from './guards/user.guard';
import { CaseGuard } from './guards/case.guard';

const routes: Routes = [
  {
    path: 'cases',
    loadChildren: () =>
      import('./modules/cases.module').then((m) => m.CaseModule),
    canActivate: [CaseGuard],
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./modules/user.module').then((m) => m.UserModule),
    canActivate: [UserGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    children: [{ path: ':id', component: ProfileComponent }],
    canActivate: [UserGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
