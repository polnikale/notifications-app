import { NOTIFICATION_SAVE } from '../actions/common';
import { FETCH_NOTIFICATIONS } from '../actions/notifications';

const initialState = [];

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_NOTIFICATIONS:
      return action.notifications;
    case NOTIFICATION_SAVE:
    console.log(action.notification.id);
      console.log('staaaaaaaaaate', state[state.length-1].id);
      return (action.notification.id <= state[state.length-1].id)
      ? state.map((existedNotification) => 
        existedNotification.id === action.notification.id 
          ? action.notification
          : existedNotification)
      : [...state, action.notification];
    default:
      return state;  
  }
}

export const getAllNotifications = (state) => {
  return state.notifications;
}