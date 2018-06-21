export const NOTIFICATION_EDIT = '@@router/NOTIFICATION_EDIT';

export function toNotification(notification) {
  return {
    type: NOTIFICATION_EDIT,
    notification
  }
}