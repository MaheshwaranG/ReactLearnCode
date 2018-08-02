import * as firebase from 'firebase'
import constants from '../constants/constants'

const config = {
    apiKey: constants.apiKey,
    authDomain: constants.authDomain,
    databaseURL: constants.databaseURL,
    projectId: constants.projectId,
    storageBucket: constants.storageBucket,
    messagingSenderId: constants.messagingSenderId
  };
  firebase.initializeApp(config);

  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {firebase, googleAuthProvider, database as default}