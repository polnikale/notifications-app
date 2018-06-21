import localStorageService from '../service/localStorage';
import * as loader from './loading'
import { saveNotification } from './common';

export const FETCH_NOTIFICATIONS = '@@/notifcations/FETCH_NOTIFICATIONS';

function getNotifications(notifications) {
  return {
    type: FETCH_NOTIFICATIONS,
    notifications
  };
}

export function modifyNotifications(notification, index) {
  return async (dispatch) => {
    if (index) {
      dispatch(editNotification(notification, index));
    } else {
      dispatch(appendNotification(notification));
    }
  }
}

export function fetchNotifications() {
  return async (dispatch) => {
    try {
      dispatch(loader.setLoading())
      const notifications = localStorageService.getNotifications();
      dispatch(getNotifications(notifications)); 
      dispatch(loader.setLoaded()); 
    } catch(error) {
      dispatch(loader.setLoaded());
      console.log(error);
    }
  }
}

export function appendNotification(notification) {
  return async (dispatch) => {
    try {
      dispatch(loader.setLoading());
      console.log(localStorageService);
      await localStorageService.appendNotification(notification);
      dispatch(saveNotification(notification));
      dispatch(loader.setLoaded());
    } catch(error) {
      dispatch(loader.setLoaded());
      console.log(error);
    }
  }
}

export function editNotification(notification) {
  return async (dispatch) => {

  }
}