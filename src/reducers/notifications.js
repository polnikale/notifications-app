import uuidv1 from 'uuid/v1';
import { createSelector } from 'reselect';

import { NOTIFICATION_SAVE } from '../actions/common';

const initialState = {};

export const reducer = (state = initialState, action) => {
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

const getNotificationsAsArray = state => Object.values(state.notifications).map((
  (notification, index) => ({
    ...notification,
    id: Object.keys(state.notifications)[index],
  })
));

export const getAllNotifications = createSelector(
  getNotificationsAsArray,
  array => array.sort((notification1, notification2) => notification1.time > notification2.time),
);
