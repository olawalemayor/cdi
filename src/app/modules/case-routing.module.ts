import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasesComponent, SingleCaseComponent } from '../components';

const routes: Routes = [
  {
    path: '',
    component: CasesComponent,
    children: [
      { path: ':id', component: SingleCaseComponent, pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaseRoutingModule {}
