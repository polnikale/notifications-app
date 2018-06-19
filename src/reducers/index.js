import router from './router';
import notification from './notification';
import notifications from './notifications';
import previousNotification from './previousNotification';
import { combineReducers } from 'redux';

export default combineReducers({
    router, 
    currentNotification: notification, 
    notifications, 
    previousNotification
});