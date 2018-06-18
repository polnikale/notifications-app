const initialState = {
  heading: '',
  description: '',
  pictures: []
};

const CHANGE_NOTIFICATION_INPUT = 'CHANGE_NOTIFICATION_INPUT';
const REMOVE_PHOTO = 'REMOVE_PHOTO';
const ADD_PHOTO = 'ADD_PHOTO';
const CLEAR_NOTIFICATION = 'CLEAR_NOTIFICATION';

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_NOTIFICATION_INPUT:
      return {
        ...state,
        [action.input]: action.value
      };
    case REMOVE_PHOTO:
      const newPictures = state.pictures.filter((picture) => {
        return !(picture === action.pictureSrc);
      });
      return {
        ...state,
        pictures: newPictures
      }
    case ADD_PHOTO:
      return {
        heading: state.heading,
        description: state.description,
        pictures: [...state.pictures, action.pictureSrc]
      }
    case CLEAR_NOTIFICATION:
      return initialState;
    default:
      return state;
  }
}

export default reducer;