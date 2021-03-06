var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {hashHistory} = require('react-router');

var actions = require('actions');
var store = require('configureStore').configure();
// var TodoAPI = require('TodoAPI');
// import Login from 'Login';
// import TodoApp from 'TodoApp';
import firebase from 'app/firebase';
import router from 'app/router';


// import './../playground/firebase/index';

// store.subscribe(() => {
//   var state = store.getState();
//   console.log('New state', state);
//   TodoAPI.setTodos(state.todos);
// });

// var initialTodos = TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initialTodos));

firebase.auth().onAuthStateChanged((user)=>{
	if (user) {
		store.dispatch(actions.login(user.uid));
		hashHistory.push('/todos');
	} else {
		store.dispatch(actions.logout());
		hashHistory.push('/');
	}
});

store.dispatch(actions.startAddTodos());


// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')



ReactDOM.render(
  <Provider store={store}>
   	{router}
  </Provider>,
  document.getElementById('app')
);
 