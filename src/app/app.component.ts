import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { WindowService } from './common/window/window.service';
import { AuthService } from './common/auth/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FirebaseAuthSample';
  email: string ;
  password: string;
  signInMode = false;
  disableOTPButton = true;
  windowRef: any;

  constructor(
    public afAuth: AngularFireAuth,
    public authService: AuthService,
    private windowService: WindowService
    ) {}


  ngOnInit() {
    // this.afAuth.authState
    // .subscribe((user) => console.log(user));
    this.windowRef = this.windowService.windowRef;
  }

// // google signin via popup returns promises
//   googleSignInViaPopup() {
//     this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
//     .then((userCredentials) => console.log(userCredentials));
//   }
// // google signin via redirect returns void promises we need to use ngOnInit()
//   googleSignInViaRedirect(){
//     this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider())
//     .then((userCredentials) => console.log(userCredentials));
//   }
// // facebook signin via popup
//   facebookSignInViaPopup() {
//     this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider())
//       .then((userCredentials) => console.log(userCredentials));
//   }
// // facebook signin via redirect
//   facebookSignInViaRedirect() {
//     this.afAuth.auth.signInWithRedirect(new auth.FacebookAuthProvider())
//     .then((userCredentials) => console.log(userCredentials));
//   }

// // twitter signin via popup
//  twitterSignInViaPopup() {
//    this.afAuth.auth.signInWithPopup(new auth.TwitterAuthProvider())
//    .then((userCredentials) => console.log(userCredentials));
//  }
// // twitter signin via redirect
//   twitterSignInViaRedirect() {
//     this.afAuth.auth.signInWithRedirect(new auth.TwitterAuthProvider())
//       .then((userCredentials) => console.log(userCredentials));
//   }

// // github signin via popup
// githubSignInViaPopup() {
//   this.afAuth.auth.signInWithPopup(new auth.GithubAuthProvider())
//   .then((userCredentials) => console.log(userCredentials));
// }
// // github signin via redirect
// githubSignInViaRedirect() {
//   this.afAuth.auth.signInWithRedirect(new auth.GithubAuthProvider())
//   .then((userCredentials) => console.log(userCredentials));
// }
// sign in anonymously


// // sign up with email and password
// signUp(){
//   this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.password)
//   .then((userCredentials) => console.log(userCredentials));
// }
// // sign in method using email and password
// signIn() {
//   this.afAuth.auth.signInWithEmailAndPassword(this.email,this.password)
//   .then((userCredentials) => console.log(userCredentials));
// }
// toggle b/w sign in and sign up..







}
