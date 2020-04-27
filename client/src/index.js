import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider}  from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import allReducers from './reducers';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';

const store = createStore(allReducers,{}, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store = {store} >
      <App />
  </Provider>,
  document.getElementById('root')
);


serviceWorker.unregister();
