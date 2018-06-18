const NOTIFICATION_CREATE = 'NOTIFICATION_CREATE';
const NOTIFICATION_EDIT = 'NOTIFICATION_EDIT';
const RETURN_BACK = 'RETURN_BACK';
const NOTIFICATIONS = 'NOTIFICATIONS';

const initialState = {
  page: 'NOTIFICATIONS'
};

const reducer = (state = initialState , action) => {
  switch(action.type) {
    case NOTIFICATION_CREATE:
      return {
        page: NOTIFICATION_CREATE
      };
    case RETURN_BACK:
      return {
        page: NOTIFICATIONS
      };
    case NOTIFICATION_EDIT:
      return {
        page: NOTIFICATION_CREATE
      }
    default:
      return state;
  }
}

export default reducer;