import firebase from 'firebase';

try{
  
  // Initialize Firebase
  var config = {
    apiKey: PROCESS_ENV_WEBPACK_PLUGIN.API_KEY,
    authDomain: PROCESS_ENV_WEBPACK_PLUGIN.AUTH_DOMAIN,
    databaseURL: PROCESS_ENV_WEBPACK_PLUGIN.DATABASE_URL,
    storageBucket: PROCESS_ENV_WEBPACK_PLUGIN.STORAGE_BUCKET,
    messagingSenderId: PROCESS_ENV_WEBPACK_PLUGIN.MESSAGING_SENDERE_ID
  };

  firebase.initializeApp(config); 

} catch(e){

}
  
export var githubProvider = new firebase.auth.GithubAuthProvider();  
export var firebaseRef = firebase.database().ref();
export default firebase;