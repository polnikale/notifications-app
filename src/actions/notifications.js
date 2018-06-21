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

export function modifyNotifications(notification, index) {
  return async (dispatch) => {
    if (typeof index === 'number') {
      dispatch(editNotification(notification, index));
    } else {
      dispatch(appendNotification(notification));
    }
  }
}

export function fetchNotifications() {
  return async (dispatch) => {
    try {
      dispatch(loader.setLoading());
      const notifications = await localStorageService.getNotifications();
      dispatch(setNotifications(notifications)); 
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
      await localStorageService.appendNotification(notification);
      dispatch(saveNotification(notification));
      dispatch(loader.setLoaded());
    } catch(error) {
      dispatch(loader.setLoaded());
      console.log(error);
    }
  }
}

export function editNotification(notification, index) {
  return async (dispatch) => {
    try {
      console.log(index);
      dispatch(loader.setLoading());
      await localStorageService.editNotification(notification, index);
      dispatch(saveNotification(notification, index));
      dispatch(loader.setLoaded());
    } catch(error) {
      dispatch(loader.setLoaded());
      console.log(error);
    }
  }
}