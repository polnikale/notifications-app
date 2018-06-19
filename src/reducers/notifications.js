const initialState = [];

const NOTIFICATION_ADD = 'NOTIFICATION_ADD';
const NOTIFICATION_EDIT_EXISTED = 'NOTIFICATION_EDIT_EXISTED';

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case NOTIFICATION_ADD:
      return [...state, action.notification]
    case NOTIFICATION_EDIT_EXISTED:
        return state.map((notification, index) => 
          index === action.prevNotification.index 
            ? action.notification
            : notification);
    default:
      return state;  
  }
}

export default reducer;