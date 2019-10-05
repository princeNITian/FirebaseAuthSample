import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FirebaseAuthSample';
  constructor(public afAuth: AngularFireAuth) {}

  ngOnInit() {
    this.afAuth.authState
    .subscribe((user) => console.log(user));
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

}
