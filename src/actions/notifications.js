import localStorageService from '../service/localStorage';
import * as loader from './loading'
import { saveNotification } from './common';

export const FETCH_NOTIFICATIONS = '@@/notifcations/FETCH_NOTIFICATIONS';

function setNotifications(notifications) {
  console.log(notifications);
  return {
    type: FETCH_NOTIFICATIONS,
    notifications
  };
}