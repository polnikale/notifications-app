import uuidv1 from 'uuid/v1';

import { NOTIFICATION_SAVE } from '../actions/common';

const initialState = {};

export const reducer = (state = initialState, action) => {
  console.log(action.notification);
  switch (action.type) {
    case NOTIFICATION_SAVE:
      return (typeof action.notification.id === 'string')
        ? {
          ...state,
          [action.notification.id]: {
            heading: action.notification.heading,
            description: action.notification.description,
            pictures: action.notification.pictures,
          },
        }
        : {
          ...state,
          [uuidv1()]: {
            ...action.notification,
            time: Date.now(),
          },
        };
    default:
      return state;
  }
};

export const getAllNotifications = state => Object.values(state.notifications).map((
  (notification, index) => ({
    ...notification,
    id: Object.keys(state.notifications)[index],
  })
)).sort((arr1, arr2) => arr1.time < arr2.time);
