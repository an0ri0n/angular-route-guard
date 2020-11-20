import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { LoginComponent } from './components/login/login.component';
import { ServicesComponent } from './components/services/services.component';
import { UserComponent } from './components/user/user.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivesComponent,
    LifecycleComponent,
    LoginComponent,
    ServicesComponent,
    UserComponent,
    AdminHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
