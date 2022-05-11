import { NgModule } from '@angular/core';
import { CasesComponent, SingleCaseComponent } from '../components';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CaseRoutingModule } from './case-routing.module';

@NgModule({
  declarations: [CasesComponent, SingleCaseComponent],
  imports: [CommonModule, HttpClientModule, CaseRoutingModule],
})
export class CaseModule {}
