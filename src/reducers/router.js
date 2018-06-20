import types from '../actions/types';

const initialState = [];

export const reducer = (state = initialState , action) => {
  switch(action.type) {
    case types.common.RETURN_BACK, types.common.NOTIFICATION_SAVE:
      return [];
    case types.router.NOTIFICATION_EDIT:
      return ['modify'];
    default:
      return state;
  }
}


export const getRouter = (state) => {
  return state.router;
}
