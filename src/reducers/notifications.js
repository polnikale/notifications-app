import { createAction } from 'redux-act';

export const setNotifications = createAction('set notifications from service');

// export function modifyNotifications(notification, index) {
//   return async (dispatch) => {
//     if (typeof index === 'number') {
//       dispatch(editNotification(notification, index));
//     } else {
//       dispatch(appendNotification(notification));
//     }
//   }
// }

// export function fetchNotifications() {
//   return async (dispatch) => {
//     try {
//       dispatch(loader.setLoading());
//       const notifications = await localStorageService.getNotifications();
//       dispatch(setNotifications(notifications)); 
//       dispatch(loader.setLoaded()); 
//     } catch(error) {
//       dispatch(loader.setLoaded());
//       console.log(error);
//     }
//   }
// }

// export function appendNotification(notification) {
//   return async (dispatch) => {
//     try {
//       dispatch(loader.setLoading());
//       await localStorageService.appendNotification(notification);
//       dispatch(saveNotification(notification));
//       dispatch(loader.setLoaded());
//     } catch(error) {
//       dispatch(loader.setLoaded());
//       console.log(error);
//     }
//   }
// }

// export function editNotification(notification, index) {
//   return async (dispatch) => {
//     try {
//       console.log(index);
//       dispatch(loader.setLoading());
//       await localStorageService.editNotification(notification, index);
//       dispatch(saveNotification(notification, index));
//       dispatch(loader.setLoaded());
//     } catch(error) {
//       dispatch(loader.setLoaded());
//       console.log(error);
//     }
//   }
// }

export const reducer = {
  [setNotifications]: (_, payload) => payload,
}

// switch(action.type) {
//   case FETCH_NOTIFICATIONS:
//     console.log(action);
//     return action.notifications
//   case NOTIFICATION_SAVE:
//     return (typeof action.index === 'number')
//     ? state.map((notification, index) => 
//       index === action.index 
//         ? action.notification
//         : notification)
//     : [...state, action.notification];
//   default:
//     return state;  
// }

export const getAllNotifications = (state) => {
  return state.notifications;
}