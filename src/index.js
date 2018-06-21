import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import registerServiceWorker from './registerServiceWorker';

import reducer from './reducers/index';
import './index.css';
import App from './components/App/App';


let store = createStore(
  reducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App /> 
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
