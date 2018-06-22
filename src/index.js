import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'


import reducers from './reducers/index';
import './index.css';
import Notifications from './containers/Notifications';
import NotificationModify from './containers/NotificationModify';
import registerServiceWorker from './registerServiceWorker';


let store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
);

const history = syncHistoryWithStore(browserHistory, store);


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Notifications} />
      <Route path="modify" component={NotificationModify} />
    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
