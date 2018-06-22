import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router'
import { routerMiddleware, syncHistoryWithStore, routerReducer } from 'react-router-redux'


import reducers from './reducers/index';
import './index.css';
import Notifications from './containers/Notifications';
import NotificationModify from './containers/NotificationModify';
import registerServiceWorker from './registerServiceWorker';

const middleware = routerMiddleware(browserHistory)


const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }),
  applyMiddleware(middleware)
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
