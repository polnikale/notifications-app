const initialState = [];

const NOTIFICATION_ADD = 'NOTIFICATION_ADD';
const NOTIFICATION_EDIT_EXISTED = 'NOTIFICATION_EDIT_EXISTED';

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case NOTIFICATION_ADD:
      return [...state, action.notification]
    case NOTIFICATION_EDIT_EXISTED:
        return state.map((notification, index) => 
          index === action.index 
            ? action.notification
            : notification);
    default:
      return state;  
  }
}

export const getAllNotifications = (state) => {
  return state.notifications;
}