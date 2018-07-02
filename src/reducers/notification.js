import {
  CHANGE_NOTIFICATION_INPUT,
  REMOVE_PHOTO,
  ADD_PHOTO,
  ADD_NOTIFICATION_INFO,
} from '../actions/notification';

import { RETURN_BACK, NOTIFICATION_SAVE } from '../actions/common';

const initialState = {
  current: {
    heading: '',
    description: '',
    pictures: [],
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NOTIFICATION_INPUT:
      return {
        ...state,
        current: {
          ...state.current,
          [action.input]: action.value,
        },
      };
    case REMOVE_PHOTO:
      return {
        ...state,
        current: {
          ...state.current,
          pictures: state.current.pictures.filter(picture => picture !== action.pictureSrc),
        },
      };
    case ADD_PHOTO:
      return {
        ...state,
        current: {
          ...state.current,
          pictures: [...state.current.pictures, action.pictureSrc],
        },
      };
    case RETURN_BACK:
    case NOTIFICATION_SAVE:
      return initialState;
    case ADD_NOTIFICATION_INFO:
      return {
        ...action.notification,
        index: action.index,
        current: {
          ...action.notification,
        },
      };
    default:
      return state;
  }
};

export const getIsValid = state => state.modifyNotification.current.heading !== '';

export const checkForIdentity = (notif1, notif2) => {
  const picturesAreEqual = notif1.pictures.length !== notif2.pictures.length
    ? false
    : notif1.pictures.filter((elem, index) => (
      notif1.pictures[index] !== notif2.pictures[index])).length === 0;
  return ((notif1.heading === notif2.heading)
        && (notif1.description === notif2.description)
        && picturesAreEqual);
};

export const getIsChanged = (state) => {
  const { modifyNotification } = state;
  return modifyNotification.heading !== undefined
    ? !checkForIdentity({
      heading: modifyNotification.heading,
      description: modifyNotification.description,
      pictures: modifyNotification.pictures,
    }, modifyNotification.current)
    : true;
};
export const getPreviousHeading = state => state.modifyNotification.heading;

export const getPreviousDescription = state => state.modifyNotification.description;

export const getPreviousPictures = state => state.modifyNotification.pictures;

export const getPreviousIndex = state => state.modifyNotification.index;

export const getCurrentNotification = state => state.modifyNotification.current;
