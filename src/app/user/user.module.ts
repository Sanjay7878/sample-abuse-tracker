import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginComponent, DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'dashboard', component: DashboardComponent}
    ])
  ]
})
export class UserModule { }
