const initialState = [];

const NOTIFICATION_ADD = 'NOTIFICATION_ADD';

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case NOTIFICATION_ADD:
      return [...state, action.notification]
    default:
      return state;  
  }
}

export default reducer;