import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/index';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';


let store = createStore(reducer);
console.log(store.getState());
ReactDOM.render(
  <Provider store={store}>
    <App /> 
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
