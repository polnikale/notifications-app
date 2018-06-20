import types from './types';

export function returnBack() {
  return {
    type: types.common.RETURN_BACK
  }
}

export function changeNotificationInput(event) {
  return {
    type: types.notification.CHANGE_NOTIFICATION_INPUT,
    input: [event.target.getAttribute('name')],
    value: event.target.value
  };
}

export function addNotificationInfo(notification, index) {
  return {
    type: types.notification.ADD_NOTIFICATION_INFO,
    notification,
    index
  }
}

export function removePhoto(pictureSrc) {
  return {
    type: types.notification.REMOVE_PHOTO,
    pictureSrc
  }
}

export function addPhoto(pictureSrc) {
  return {
    type: types.notification.ADD_PHOTO,
    pictureSrc
  };
}

export function addNotification(notification) {
  return {
    type: types.notifications.NOTIFICATION_ADD,
    notification
  };
}

export function editExistedNotification(notification, index) {
  return {
    type: types.notifications.NOTIFICATION_EDIT_EXISTED,
    notification,
    index
  };
}

export function toNotification(notification) {
  return {
    type: types.router.NOTIFICATION_EDIT,
    notification
  }
}
