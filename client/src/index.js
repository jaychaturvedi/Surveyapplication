import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider}  from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import allReducers from './reducers';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';
import axios from 'axios'
window.axios = axios
const store = createStore(allReducers,{}, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store = {store} >
      <App />
  </Provider>,
  document.getElementById('root')
);

console.log("environment is", process.env.NODE_ENV)
console.log("public key is" , process.env.REACT_APP_STRIPE_KEY)
serviceWorker.unregister();
