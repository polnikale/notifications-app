import { reducer as router } from './router';
import { reducer as notification } from './notification';
import { reducer as notifications, appendNotification, editNotification, fetchNotifications } from './notifications';
import { reducer as loading } from './loading';
import { combineReducers } from 'redux';

export default combineReducers({
    router, 
    modifyNotification: notification, 
    notifications,
    loading,
    appendNotification,
    editNotification,
    fetchNotifications
});