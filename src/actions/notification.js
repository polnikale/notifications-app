export const CHANGE_NOTIFICATION_INPUT = '@@notification/CHANGE_NOTIFICATION_INPUT';
export const ADD_NOTIFICATION_INFO = '@@notification/ADD_NOTIFICATION_INFO';
export const REMOVE_PHOTO = '@@notification/REMOVE_PHOTO';
export const ADD_PHOTO = '@@notification/ADD_PHOTO';

export function changeNotificationInput(event) {
  return {
    type: CHANGE_NOTIFICATION_INPUT,
    input: [event.target.getAttribute('name')],
    value: event.target.value
  };
}
  
export function addNotificationInfo(notification, index) {
  return {
    type: ADD_NOTIFICATION_INFO,
    notification,
    index
  }
}

export function removePhoto(pictureSrc) {
  return {
    type: REMOVE_PHOTO,
    pictureSrc
  }
}

export function addPhoto(pictureSrc) {
  return {
    type: ADD_PHOTO,
    pictureSrc
  };
}