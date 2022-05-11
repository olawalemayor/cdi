import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent, UsersComponent } from '../components';
import { UserGuard } from '../guards/user.guard';

const routes: Routes = [
  { path: '', component: UsersComponent, canActivate: [UserGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
