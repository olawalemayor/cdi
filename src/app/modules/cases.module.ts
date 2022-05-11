import { NgModule } from '@angular/core';
import { CasesComponent, SingleCaseComponent } from '../components';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CaseRoutingModule } from './case-routing.module';
import { CaseGuard } from '../guards/case.guard';

@NgModule({
  declarations: [CasesComponent, SingleCaseComponent],
  imports: [CommonModule, HttpClientModule, CaseRoutingModule],
  providers: [CaseGuard],
})
export class CaseModule {}
