export const FETCH_NOTIFICATIONS = '@@/notifications/FETCH_NOTIFICATIONS';
export const ASYNC_FETCH_NOTIFICATIONS = '@@/notifications/ASYNC_FETCH_NOTIFICATIONS';

export function asyncFetchNotifications() {
  return {
    type: ASYNC_FETCH_NOTIFICATIONS
  };
}

export function fetchNotifications(notifications) {
  return {
    type: FETCH_NOTIFICATIONS,
    notifications
  }
}