export function toNotification(notification) {
  return {
    type: 'NOTIFICATION_EDIT',
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

export function editExistedNotification(prevNotification, notification) {
  return {
    type: 'NOTIFICATION_EDIT_EXISTED',
    prevNotification,
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

export function addNotificationInfo(notification) {
  return {
    type: 'ADD_NOTIFICATION_INFO',
    notification
  }
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

export function clearNotification() {
  return {
    type: 'CLEAR_NOTIFICATION'
  };
}

export function removePreviousNotification() {
  return {
    type: 'REMOVE_PREVIOUS_NOTIFICATION'
  }
}

export function setPreviousNotification(notification) {
  return {
    type: 'SET_PREVIOUS_NOTIFICATION',
    notification
  }
}