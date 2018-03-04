import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import App from './App';
import registerServiceWorker from './registerServiceWorker';


// Initialize Firebase
const config = {
  apiKey: "AIzaSyAXg2z7dSZusZ5D4iFYsLgkCgeOuCo9lE0",
  authDomain: "uayapp-3a8b5.firebaseapp.com",
  databaseURL: "https://uayapp-3a8b5.firebaseio.com",
  projectId: "uayapp-3a8b5",
  storageBucket: "uayapp-3a8b5.appspot.com",
  messagingSenderId: "788673162926"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
