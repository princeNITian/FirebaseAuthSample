import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AuthService } from 'src/app/common/auth/auth.service';
@Component({
  selector: 'app-login-options',
  templateUrl: './login-options.component.html',
  styleUrls: ['./login-options.component.css']
})
export class LoginOptionsComponent implements OnInit {

  provider = environment.providers;
  modes = environment.modes;
  constructor(public authService: AuthService) { }

  ngOnInit() {
  }
  signInWithModeAndProvider(mode: string, provider: string) {
    this.authService.signIn(mode, provider);
  }
  signInAnonymously() {
    this.authService.signInAnonymously();
  }

  toggleSignInMode() {
    this.authService.signInMode = !this.authService.signInMode;
  }
  togglePhoneSignIn() {
    this.authService.phoneSignIn = !this.authService.phoneSignIn;
  }


}
