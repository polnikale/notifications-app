import { createAction, createReducer } from 'redux-act';

export const setLoading = createAction('Start loading');
export const setLoaded = createAction('Finish loading');

const initialState = false;

export const reducer = createReducer({
  [setLoading]: () => true,
  [setLoaded]: () => false,
}, initialState);

// switch(action.type) {
//   case SET_LOADING:
//     return true;
//   case SET_LOADED:
//     return false;
//   default:
//     return state;
// }

export const getIsLoading = (state) => {
  return state.loading;
};