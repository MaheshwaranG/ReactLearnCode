import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {firebase,googleAuthProvider} from './firebase/firebase'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

