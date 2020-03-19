import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

var firebaseConfig = {
    apiKey: "AIzaSyDOjl-c68si7yeN-9inz182bW7PuHcSHCQ",
    authDomain: "todo-240-311.firebaseapp.com",
    databaseURL: "https://todo-240-311.firebaseio.com",
    projectId: "todo-240-311",
    storageBucket: "todo-240-311.appspot.com",
    messagingSenderId: "954762069870",
    appId: "1:954762069870:web:47b5371e51b4a520dfe37f",
    measurementId: "G-HN91FPJX1F"
  };

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
