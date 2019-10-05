import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';




@NgModule({

  imports: [
  AngularFireModule.initializeApp(environment.firebase),
  AngularFireAuthModule
  ],
  exports: [
  AngularFireModule,
  AngularFireAuthModule
  ]
})
export class AppFirebaseModule { }
