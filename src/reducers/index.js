import { reducer as router } from './router';
import { reducer as notification } from './notification';
import notifications from './notifications';
import { combineReducers } from 'redux';

export default combineReducers({
    router, 
    modifyNotification: notification, 
    notifications,
});