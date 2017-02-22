import firebase from 'firebase';

try{
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDwHm2bKEp16EKo7_1PGIQYjbhPtJmLWtU",
    authDomain: "mead-todo-app-6cd5f.firebaseapp.com",
    databaseURL: "https://mead-todo-app-6cd5f.firebaseio.com",
    storageBucket: "mead-todo-app-6cd5f.appspot.com",
    messagingSenderId: "783147967240"
  };
  firebase.initializeApp(config); 

} catch(e){

}
  
export var firebaseRef = firebase.database().ref();
export default firebase;