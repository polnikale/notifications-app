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

export const compareArrays = (array1, array2) => (
  array1.length !== array2.length
    ? false
    : array1.every((value, index) => value === array2[index])
);

export const checkForIdentity = (notification1, notification2) => (
  (notification1.heading === notification2.heading)
  && (notification1.description === notification2.description)
  && compareArrays(notification1.pictures, notification2.pictures)
);

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

export const getModifyNotification = state => state.modifyNotification;

export const getPreviousHeading = state => getModifyNotification(state).heading;

export const getPreviousDescription = state => getModifyNotification(state).description;

export const getPreviousPictures = state => getModifyNotification(state).pictures;

export const getPreviousIndex = state => getModifyNotification(state).index;

export const getCurrentNotification = state => getModifyNotification(state).current;
