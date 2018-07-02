export const RETURN_BACK = '@@common/RETURN_BACK';
export const NOTIFICATION_SAVE = '@@common/NOTIFICATION_SAVE';

export function returnBack() {
  return {
    type: RETURN_BACK,
  };
}

export function saveNotification(notification, index) {
  return {
    type: NOTIFICATION_SAVE,
    notification,
    index,
  };
}
