import firebase from 'firebase';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDwHm2bKEp16EKo7_1PGIQYjbhPtJmLWtU",
    authDomain: "mead-todo-app-6cd5f.firebaseapp.com",
    databaseURL: "https://mead-todo-app-6cd5f.firebaseio.com",
    storageBucket: "mead-todo-app-6cd5f.appspot.com",
    messagingSenderId: "783147967240"
  };
  firebase.initializeApp(config); 

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user:{
    name: 'Ognjen',
    age: 33
  }
});

firebaseRef.once('value').then((sanpshot)=>{
  console.log('Got entire database', sanpshot.val())
}, (e)=>{console.log('unable to fetch value',e)});


var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot)=>{
  console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Todo 1'
});
todosRef.push({
  text: 'Todo 2'
});




// firebaseRef.child('app').once('value').then((sanpshot)=>{
//   console.log('Got entire database', sanpshot.key, sanpshot.val())
// }, (e)=>{console.log('unable to fetch value',e)});

// firebaseRef.on('value', (snapshot)=>{
//   console.log('Got value', snapshot.val());
// });

// var logData = (snapshot)=>{
//   console.log('Got value', snapshot.val());
// };

// firebaseRef.on('value', logData);


// firebaseRef.off(logData);

// firebaseRef.update({isRunning: false});
// firebaseRef.child('user').set({
//   name: 'Mike'
// });

// firebaseRef.update({
//   isRunning: false,
//   'app/name':'Todo Application car'
// });

// firebaseRef.child('app').update({
//   name:'Todo Application 1'
// });

// firebaseRef.child('app/name').remove();
// firebaseRef.child('app').update({
//   version: '2.0',
//   name: null
// });