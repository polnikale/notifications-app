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

export function saveNotification(current, index, heading) {
  return {
    type: 'NOTIFICATION_SAVE',
    current,
    index,
    heading
  };
}

export function editExistedNotification(notification, index) {
  return {
    type: 'NOTIFICATION_EDIT_EXISTED',
    notification,
    index
  };
}

export function changeNotificationInput(event) {
  return {
    type: 'CHANGE_NOTIFICATION_INPUT',
    input: [event.target.getAttribute('name')],
    value: event.target.value
  };
}

export function addNotificationInfo(notification, index) {
  return {
    type: 'ADD_NOTIFICATION_INFO',
    notification,
    index
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