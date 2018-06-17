const NOTIFICATION_CREATE = 'NOTIFICATION_CREATE';
const RETURN_BACK = 'RETURN_BACK';
const NOTIFICATIONS = 'NOTIFICATIONS';

const initialState = {
  page: 'NOTIFICATION_CREATE'
}

const reducer = (state = initialState , action) => {
  switch(action.type) {
    case NOTIFICATION_CREATE:
      return {
        page: NOTIFICATION_CREATE,
        currentNotification: action.notification,
      };
    case RETURN_BACK:
      return {
        page: NOTIFICATIONS,
        currentNotification: {
          heading: '',
          description: '',
          pictures: []
        }
      };
    default:
      return state;
  }
}

export default reducer;