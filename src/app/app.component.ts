import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { WindowService } from './common/window/window.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'FirebaseAuthSample';
  email: string ;
  password: string;
  phoneNumber: string;
  signInMode = false;
  phoneSignIn = true;
  otp: string;
  disableOTPButton = true;
  windowRef: any;
  constructor(
    public afAuth: AngularFireAuth,
    private windowService: WindowService
    ) {}


  ngOnInit() {
    // this.afAuth.authState
    // .subscribe((user) => console.log(user));
    this.windowRef = this.windowService.windowRef;
  }
  ngAfterViewInit(){
    this.windowRef.recaptchaVerifier = new auth.RecaptchaVerifier('recaptcha-container', {
      size: 'normal',
      callback: (response) => {
        // TODO
        this.disableOTPButton = false;
      }
    });
    this.windowRef.recaptchaVerifier.render();
  }
// google signin via popup returns promises
  googleSignInViaPopup() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
    .then((userCredentials) => console.log(userCredentials));
  }
// google signin via redirect returns void promises we need to use ngOnInit()
  googleSignInViaRedirect(){
    this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider())
    .then((userCredentials) => console.log(userCredentials));
  }
// facebook signin via popup
  facebookSignInViaPopup() {
    this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider())
      .then((userCredentials) => console.log(userCredentials));
  }
// facebook signin via redirect
  facebookSignInViaRedirect() {
    this.afAuth.auth.signInWithRedirect(new auth.FacebookAuthProvider())
    .then((userCredentials) => console.log(userCredentials));
  }

// twitter signin via popup
 twitterSignInViaPopup() {
   this.afAuth.auth.signInWithPopup(new auth.TwitterAuthProvider())
   .then((userCredentials) => console.log(userCredentials));
 }
// twitter signin via redirect
  twitterSignInViaRedirect() {
    this.afAuth.auth.signInWithRedirect(new auth.TwitterAuthProvider())
      .then((userCredentials) => console.log(userCredentials));
  }

// github signin via popup
githubSignInViaPopup() {
  this.afAuth.auth.signInWithPopup(new auth.GithubAuthProvider())
  .then((userCredentials) => console.log(userCredentials));
}
// github signin via redirect
githubSignInViaRedirect() {
  this.afAuth.auth.signInWithRedirect(new auth.GithubAuthProvider())
  .then((userCredentials) => console.log(userCredentials));
}
// sign in anonymously
signInAnonymously() {
  this.afAuth.auth.signInAnonymously()
  .then((userCredentials) => console.log(userCredentials));
}
// logout
logout(){
  this.afAuth.auth.signOut();
}
// sign up with email and password
signUp(){
  this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.password)
  .then((userCredentials) => console.log(userCredentials));
}
// sign in method using email and password
signIn() {
  this.afAuth.auth.signInWithEmailAndPassword(this.email,this.password)
  .then((userCredentials) => console.log(userCredentials));
}
// toggle b/w sign in and sign up..
signInOrSignUp() {
  this.signInMode ? this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.password)
  : this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password);
}
toggleSignInMode() {
  this.signInMode = !this.signInMode;
}
togglePhoneSignIn() {
  this.phoneSignIn = !this.phoneSignIn;
}

sendOTP() {
  this.afAuth.auth.signInWithPhoneNumber(this.phoneNumber, this.windowRef.recaptchaVerifier)
  .then((confirmationResult) => {
    this.windowRef.confirmationResult = confirmationResult;
  });
}
verifyOTP(){
  this.windowRef.confirmationResult.confirm(this.otp)
  .then((userCredentials) => console.log(userCredentials));
}



}
