import { SET_LOADING, SET_LOADED } from '../actions/loading';

const initialState = false;

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_LOADING:
      return true;
    case SET_LOADED:
      return false;
    default:
      return state;
  }
}

export const getIsLoading = (state) => {
  return state.loading;
};