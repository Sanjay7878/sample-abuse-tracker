import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDasboardComponent } from './admin-dasboard/admin-dasboard.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AdminLoginComponent, AdminDasboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'admin-dashboard', component: AdminDasboardComponent}
    ])
  ]
})
export class AdminModule { }
