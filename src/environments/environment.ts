// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyA0KOuTwvtjE7le1_bs8-77IF5rUsabtLI',
    authDomain: 'fir-authangular-91b1e.firebaseapp.com',
    databaseURL: 'https://fir-authangular-91b1e.firebaseio.com',
    projectId: 'fir-authangular-91b1e',
    storageBucket: '',
    messagingSenderId: '830985375662',
    appId: '1:830985375662:web:b52127640f10f52a47023f'
  },
  modes: {
    POPUP: 'popup',
    REDIRECT: 'redirect'
  },
  providers: {
    GOOGLE: 'google',
    FACEBOOK: 'facebook',
    TWITTER: 'twitter',
    GITHUB: 'github'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
