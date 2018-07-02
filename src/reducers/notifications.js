import uuidv1 from 'uuid/v1';

import { NOTIFICATION_SAVE } from '../actions/common';

const initialState = [];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NOTIFICATION_SAVE:
      return (typeof action.notification.id === 'string')
        ? state.map((notification, index) => (index === action.index
          ? action.notification
          : notification))
        : [...state, {
          ...action.notification,
          id: uuidv1(),
          time: Date.now(),
        }];
    default:
      return state;
  }
};

export const getAllNotifications = state => state.notifications;
