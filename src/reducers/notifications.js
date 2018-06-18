const initialState = [];

const NOTIFICATION_ADD = 'NOTIFICATION_ADD';
const NOTIFICATION_EDIT_EXISTED = 'NOTIFICATION_EDIT_EXISTED';

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case NOTIFICATION_ADD:
      return [...state, action.notification]
    case NOTIFICATION_EDIT_EXISTED:
      const editedNotification = action.notification;
      const newNotifications = state.map((notification, index) => {
        if (index === action.prevNotification.index) {
          return {
            heading: editedNotification.heading,
            description: editedNotification.description,
            pictures: editedNotification.pictures
          }
        }
        return notification;
      });
      return newNotifications;
    default:
      return state;  
  }
}

export default reducer;