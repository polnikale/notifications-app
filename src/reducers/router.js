import types from '../actions/types';

const initialState = [];

export const reducer = (state = initialState , action) => {
  switch(action.type) {
    case types.common.RETURN_BACK:
      return [];
    case types.router.NOTIFICATION_EDIT:
      return ['modify'];
    default:
      return state;
  }
}

export const getIsBackAvailable = (state) => {
  return state.router.length !== 0
    ? true
    : false;
};
