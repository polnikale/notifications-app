import { createAction } from 'redux-act';

import * as actions from './common';

export const toNotification = createAction('Move to notification');

export const reducer =  {
  [toNotification]: () => ['modify'],
  [actions.saveNotification]: (state) => state.slice(0, state.length - 1),
  [actions.returnBack]: (state) => state.slice(0, state.length - 1),
};

// switch(action.type) {
//   case RETURN_BACK:
//   case NOTIFICATION_SAVE:
//     return state.slice(0, state.length-1);
//   case NOTIFICATION_EDIT:
//     return ['modify'];
//   default:
//     return state;
// }


export const getRouter = (state) => {
  return state.router;
}

export const getCurrentRoute = (state) => {
  return state.router[state.router.length - 1] || '';
};

export const getIsBackAvailable = (state) => {
  return state.router.length !== 0;
}
