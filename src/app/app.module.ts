import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppFirebaseModule } from './app-firebase/app-firebase.module';
import { FormsModule } from '@angular/forms';
import { WindowService } from './common/window/window.service';
import { AuthService } from './common/auth/auth.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppFirebaseModule
  ],
  providers: [
    AuthService,
    WindowService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
