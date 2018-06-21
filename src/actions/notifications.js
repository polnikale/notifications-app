export const FETCH_NOTIFICATIONS = '@@/notifications/FETCH_NOTIFICATIONS';
export const ASYNC_FETCH_NOTIFICATIONS = '@@/notifications/ASYNC_FETCH_NOTIFICATIONS';
export const ASYNC_MODIFY_NOTIFICATION = '@@/notifications/ASYNC_ADD_NOTIFICATION';

export function asyncFetchNotifications() {
  return {
    type: ASYNC_FETCH_NOTIFICATIONS
  };
}



export function asyncModifyNotification(notification, index) {
  return {
    type: ASYNC_MODIFY_NOTIFICATION,
    notification,
    index
  }
}

export function fetchNotifications(notifications) {
  return {
    type: FETCH_NOTIFICATIONS,
    notifications
  }
}