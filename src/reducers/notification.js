const initialState = {
  heading: '',
  description: '',
  pictures: []
};

const CHANGE_NOTIFICATION_INPUT = 'CHANGE_NOTIFICATION_INPUT';
const REMOVE_PHOTO = 'REMOVE_PHOTO';
const ADD_PHOTO = 'ADD_PHOTO';
const CLEAR_NOTIFICATION = 'CLEAR_NOTIFICATION';
const ADD_NOTIFICATION_INFO = 'ADD_NOTIFICATION_INFO';

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_NOTIFICATION_INPUT:
      return {
        ...state,
        [action.input]: action.value
      };
    case REMOVE_PHOTO:
      return {
        ...state,
        pictures: state.pictures.filter((picture) => picture !== action.pictureSrc),
      }
    case ADD_PHOTO:
      return {
        ...state,
        pictures: [...state.pictures, action.pictureSrc]
      }
    case CLEAR_NOTIFICATION:
      return initialState;
    case ADD_NOTIFICATION_INFO:
      return action.notification;
    default:
      return state;
  }
}

export default reducer;