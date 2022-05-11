import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { UsersComponent } from '../components';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, FormsModule, HttpClientModule, UserRoutingModule],
  exports: [],
})
export class UserModule {}
