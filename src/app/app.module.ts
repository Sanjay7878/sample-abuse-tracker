import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule} from '@angular/router'
import { LoginComponent } from './user/login/login.component';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    AdminModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'admin', component: AdminLoginComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
