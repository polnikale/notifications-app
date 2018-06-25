import { createAction } from 'redux-act';

export const setLoading = createAction('Start loading');
export const setLoaded = createAction('Finish loading');

export const reducer = {
  [setLoading]: () => true,
  [setLoaded]: () => false,
};

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