import types from '../actions/types';

const initialState = [];

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.common.NOTIFICATION_SAVE:
    console.log(typeof action.index);
      return (typeof action.index === 'number')
      ? state.map((notification, index) => 
        index === action.index 
          ? action.notification
          : notification)
      : [...state, action.notification];
    // case types.notifications.NOTIFICATION_ADD:
    //   return [...state, action.notification]
    // case types.notifications.NOTIFICATION_EDIT_EXISTED:
    //     return state.map((notification, index) => 
    //       index === action.index 
    //         ? action.notification
    //         : notification);
    default:
      return state;  
  }
}

export const getAllNotifications = (state) => {
  return state.notifications;
}