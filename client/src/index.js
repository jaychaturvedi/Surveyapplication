import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider}  from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import allReducers from './reducers';
import * as serviceWorker from './serviceWorker';

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store = {store} >
      <App />
  </Provider>,
  document.getElementById('root')
);


serviceWorker.unregister();
