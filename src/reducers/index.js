import route from './router';
import notification from './notification';
import notifications from './notifications';
import { combineReducers } from 'redux';

export default combineReducers({page: route, currentNotification: notification, notifications});