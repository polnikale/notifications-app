const NOTIFICATION_CREATE = 'NOTIFICATION_CREATE';
const NOTIFICATION_EDIT = 'NOTIFICATION_EDIT';
const RETURN_BACK = 'RETURN_BACK';

const initialState = [];

export const reducer = (state = initialState , action) => {
  switch(action.type) {
    case NOTIFICATION_CREATE:
      return ['modify'];
    case RETURN_BACK:
      return [];
    case NOTIFICATION_EDIT:
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
