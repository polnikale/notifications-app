const initialState = {
  current: {
    heading: '',
    description: '',
    pictures: []
  },
};

const CHANGE_NOTIFICATION_INPUT = 'CHANGE_NOTIFICATION_INPUT';
const REMOVE_PHOTO = 'REMOVE_PHOTO';
const ADD_PHOTO = 'ADD_PHOTO';
const RETURN_BACK = 'RETURN_BACK';
const ADD_NOTIFICATION_INFO = 'ADD_NOTIFICATION_INFO';

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_NOTIFICATION_INPUT:
      return {
        ...state,
        current: {
          ...state.current,
          [action.input]: action.value
        },
      };
    case REMOVE_PHOTO:
      return {
        ...state,
        current: {
          ...state.current,
          pictures: state.current.pictures.filter((picture) => picture !== action.pictureSrc),
        }
      }
    case ADD_PHOTO:
      return {
        ...state,
        current: {
          ...state.current,
          pictures: [...state.current.pictures, action.pictureSrc]
        }
      }
    case RETURN_BACK:
      return initialState;
    case ADD_NOTIFICATION_INFO:
      return {
        ...action.notification,
        index: action.index,
        current: {
          ...action.notification
        }
      }
    default:
      return state;
  }
}

export const getIsValid = (state) => {
  return state.modifyNotification.current.heading !== '';
}

export const getIsChanged = (state) => {
  const { modifyNotification } = state;
  return modifyNotification.heading !== undefined 
    ? !checkForIdentity({
      heading: modifyNotification.heading,
      description: modifyNotification.description,
      pictures: modifyNotification.pictures,
    }, modifyNotification.current)
    : true
}

export const checkForIdentity = (notif1, notif2) => {
  let picturesAreEqual;
  if (notif1.pictures.length !== notif2.pictures.length) {
    picturesAreEqual = false;
  } else {
    picturesAreEqual = notif1.pictures.filter((elem, index) => {
      return notif1.pictures[index] !== notif2.pictures[index];
    }).length === 0;
  }
  return notif1.heading === notif2.heading && notif1.description === notif2.description && picturesAreEqual;
}

export const getPreviousHeading = (state) => {
  return state.modifyNotification.heading;
};
export const getPreviousDescription = (state) => {
  return state.modifyNotification.description;
};
export const getPreviousPictures = (state) => {
  return state.modifyNotification.pictures;
};
export const getPreviousIndex = (state) => {
  return state.modifyNotification.index;
};

export const getCurrentNotification = (state) => {
  return state.modifyNotification.current
}
