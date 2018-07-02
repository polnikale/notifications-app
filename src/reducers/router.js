import { RETURN_BACK, NOTIFICATION_SAVE } from '../actions/common';
import { NOTIFICATION_EDIT } from '../actions/router';

const initialState = [];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RETURN_BACK:
    case NOTIFICATION_SAVE:
      return state.slice(0, state.length - 1);
    case NOTIFICATION_EDIT:
      return ['modify'];
    default:
      return state;
  }
};


export const getRouter = state => state.router;

export const getCurrentRoute = state => state.router[state.router.length - 1] || '';

export const getIsBackAvailable = state => state.router.length !== 0;
