import { NOTIFICATION_SAVE } from '../actions/common';

const initialState = [];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NOTIFICATION_SAVE:
      return (typeof action.index === 'number')
        ? state.map((notification, index) => (index === action.index
          ? action.notification
          : notification))
        : [...state, action.notification];
    default:
      return state;
  }
};

export const getAllNotifications = state => state.notifications;
