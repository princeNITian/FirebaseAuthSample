import { Component, OnInit, AfterViewInit } from '@angular/core';
import { WindowService } from 'src/app/common/window/window.service';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { AuthService } from 'src/app/common/auth/auth.service';

@Component({
  selector: 'app-phone-signin',
  templateUrl: './phone-signin.component.html',
  styleUrls: ['./phone-signin.component.css']
})
export class PhoneSigninComponent implements OnInit, AfterViewInit {

  windowRef: any;
  phoneNumber: string;
  otp: string;
  disableOTPButton = true;
  constructor(
    private afAuth: AngularFireAuth,
    private windowService: WindowService,
    private authServie: AuthService) { }

  ngOnInit() {
    this.windowRef = this.windowService.windowRef;
  }
  ngAfterViewInit() {
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      size: 'normal',
      callback: (response) => {
        // TODO
        this.disableOTPButton = false;
      }
    });
    this.windowRef.recaptchaVerifier.render();
  }
  sendOTP() {
    this.afAuth.auth.signInWithPhoneNumber(this.phoneNumber, this.windowRef.recaptchaVerifier)
      .then((confirmationResult) => {
        this.windowRef.confirmationResult = confirmationResult;
      });
  }
  verifyOTP() {
    this.windowRef.confirmationResult.confirm(this.otp)
      .then((userCredentials) => console.log(userCredentials));
  }
  togglePhoneSignIn() {
    this.authServie.phoneSignIn = !this.authServie.phoneSignIn;
  }
}
