import { combineReducers } from 'redux';
import { createAction, createReducer } from 'redux-act';
import { createActionAsync, createReducerAsync } from 'redux-act-async';
import { saveNotification } from './common';

import localStorageService from '../service/localStorage';
import { toNotifications } from './router';
import * as loading from './loading';

const initialState = [];

export const setNotifications = createAction('set notifications from service');

export const fetchNotifications = createActionAsync('FETCH_NOTIFICATIONS', localStorageService.getNotifications, {
  request: {
    callback: (dispatch) => {
      dispatch(loading.setLoading());
    }
  },
  ok: {
    callback: (dispatch, getState, ...args) => {
      dispatch(loading.setLoaded());
      dispatch(setNotifications(...args))
    }
  },
  error: {
    callback: (dispatch) => {
      dispatch(loading.setLoaded());
    }
  }
});

export const appendNotification = createActionAsync('APPEND_NOTIFICATION', localStorageService.appendNotification, {
  request: {
    callback: (dispatch) => {
      dispatch(loading.setLoading());
    }
  },
  ok: {
    callback: (dispatch, getState, ...args) => {
      dispatch(loading.setLoaded());
      dispatch(saveNotification(...args))
    }
  },
  error: {
    callback: (dispatch) => {
      dispatch(loading.setLoaded());
    }
  }
});

export const editNotification = createActionAsync('EDIT_NOTIFICATION', localStorageService.editNotification, {
  request: {
    callback: (dispatch) => {
      dispatch(loading.setLoading());
    }
  },
  ok: {
    callback: (dispatch, getState, ...args) => {
      dispatch(loading.setLoaded());
      dispatch(saveNotification(...args))
    }
  },
  error: {
    callback: (dispatch) => {
      dispatch(loading.setLoaded());
    }
  }
});

export function modifyNotifications(notification, index) {
  return async (dispatch) => {
    dispatch(toNotifications());
    if (typeof index === 'number') {
      dispatch(editNotification(notification, index));
    } else {
      dispatch(appendNotification(notification));
    }
  }
}
// export const reducer = combineReducers({
//   createReducer({
//     [setNotifications]: (_, payload) => payload,
//   }, initialState),
//   createReducerAsync(appendNotification), 
//   createReducerAsync(editNotification),
//   createReducerAsync(fetchNotifications)
// });

export const reducer = createReducer({
  [setNotifications]: (state, payload) => payload,
}, initialState);
console.dir('reduuuucer', reducer);

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
