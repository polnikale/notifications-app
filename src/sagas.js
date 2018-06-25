import { call, put, takeLatest, all } from 'redux-saga/effects';

import localStorageService from './service/localstorage';
import * as notificationsActions from './actions/notifications';
import { saveNotification } from './actions/common';

function* fetchNotifications() {
  try {
    const notifications = yield call(localStorageService.getNotifications);
    yield put(notificationsActions.fetchNotifications(notifications));

  } catch(error) {
    console.log(error);
  }
}

function* addNotification(notification) {
  try {
    const newNotification = yield call(() => localStorageService.appendNotification(notification));
    yield put(saveNotification(newNotification));
  } catch(error) {
    console.log(error);
  }
}

function* editNotification(notification) {
  try {
    yield call(() => localStorageService.editNotification(notification));
    yield put(saveNotification(notification));
  } catch(error) {
    console.log(error);
  }
}

function* modifyNotification(action) {
  console.log(action.notification);
  if (typeof action.notification.id === 'number') { // id создается на локалхосте, так что на данный момент, если создается новый, его нект
    yield call(() => editNotification(action.notification));
  } else {
    yield call(() => addNotification(action.notification));
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(notificationsActions.ASYNC_MODIFY_NOTIFICATION, modifyNotification),
    takeLatest(notificationsActions.ASYNC_FETCH_NOTIFICATIONS, fetchNotifications)
  ])
}