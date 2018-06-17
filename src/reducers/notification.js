const initialState = {
  heading: '',
  description: '',
  pictures: []
};

const CHANGE_NOTIFICATION_INPUT = 'CHANGE_NOTIFICATION_INPUT';
const REMOVE_PHOTO = 'REMOVE_PHOTO';
const ADD_PHOTO = 'ADD_PHOTO';

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
        picutres: newPictures
      }
    case ADD_PHOTO:
      return {
        heading: state.heading,
        description: state.description,
        pictures: [...state.pictures, action.pictureSrc]
      }
    default:
      return state;
  }
}

export default reducer;