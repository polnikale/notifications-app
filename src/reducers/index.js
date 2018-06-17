import route from './router';
import notification from './notification';
import { combineReducers } from 'redux';

export default combineReducers({page: route, notification});