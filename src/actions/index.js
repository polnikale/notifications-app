export function toNotification(notification) {
  return {
    type: 'NOTIFICATION_CREATE',
    notification
  }
}

export function returnBack() {
  return {
    type: 'RETURN_BACK'
  }
}

export function addNotification(notification) {
  return {
    type: 'NOTIFICATION_ADD',
    notification
  };
}

export function changeNotifInput(event) {
  return {
    type: 'CHANGE_NOTIFICATION_INPUT',
    input: [event.target.getAttribute('name')],
    value: event.target.value
  };
}

export function removePhoto(pictureSrc) {
  return {
    type: 'REMOVE_PHOTO',
    pictureSrc
  }
}

export function addPhoto(pictureSrc) {
  return {
    type: 'ADD_PHOTO',
    pictureSrc
  };
}