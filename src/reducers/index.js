import { combineReducers } from 'redux';

import { reducer as router } from './router';
import { reducer as notification } from './notification';
import { reducer as notifications } from './notifications';

export default combineReducers({
  router,
  modifyNotification: notification,
  notifications,
});
