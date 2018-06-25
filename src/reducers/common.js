import { createAction } from 'redux-act';

export const returnBack = createAction('return back');

export const saveNotification = createAction('save notification and comeback');

// export function saveNotification(notification, index) {
//   return {
//     type: NOTIFICATION_SAVE,
//     notification,
//     index
//   }
// }