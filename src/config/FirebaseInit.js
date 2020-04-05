import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui'
import firebaseConfig from './FirebaseConfig'

  firebase.initializeApp(firebaseConfig);
  const ui = new firebaseui.auth.AuthUI(firebase.auth());

  const firebaseUi = {
    init : (divId) => {
      ui.start(divId, {
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ],
        callbacks: {
          signInSuccessWithAuthResult: (authResult, redirectUrl) => {
            return false;
          }
        },
        signInFlow: 'popup'
      });

    }
  }

  export {firebase, firebaseUi}