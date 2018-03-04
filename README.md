# Chat Multicast

### Run application

* Install dependencies 
``` bash
  npm install
```
* Register your firebase app

* Add firebase configuration in **src/index.js** file

``` javascript 
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase';
import registerServiceWorker from './registerServiceWorker';

// Initialize Firebase
var config = {
  apiKey: "Insert here",
  authDomain: "Insert here",
  databaseURL: "Insert here",
  projectId: "Insert here",
  storageBucket: "Insert here",
  messagingSenderId: "Insert here"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

```

* Run command
``` bash
  npm start
```