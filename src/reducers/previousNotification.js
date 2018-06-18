const initialState = {};

const SET_PREVIOUS_NOTIFICATION = 'SET_PREVIOUS_NOTIFICATION';
const REMOVE_PREVIOUS_NOTIFICATION = 'REMOVE_PREVIOUS_NOTIFICATION';

const reducer = (state = initialState, action) => {
  console.log(action);
  switch(action.type) {
    case SET_PREVIOUS_NOTIFICATION:
      return action.notification;
    case REMOVE_PREVIOUS_NOTIFICATION:
      return initialState;
    default:
      return state;
  }
}

export default reducer;