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
    yield call(() => localStorageService.appendNotification(notification));
    yield put(saveNotification(notification));
  } catch(error) {
    console.log(error);
  }
}

function* editNotification(notification, index) {
  try {
    yield call(() => localStorageService.editNotification(notification, index));
    yield put(saveNotification(notification, index));
  } catch(error) {
    console.log(error);
  }
}

function* modifyNotification(action) {
  if (typeof action.index === 'number') {
    yield call(() => editNotification(action.notification, action.index));
  } else {
    yield call(() => addNotification(action.notification));
  }
}


function* watchModifyNotification() {
  yield takeLatest(notificationsActions.ASYNC_MODIFY_NOTIFICATION, modifyNotification);
}
function* watchFetchNotifications() {
  yield takeLatest(notificationsActions.ASYNC_FETCH_NOTIFICATIONS, fetchNotifications);
}

export default function* rootSaga() {
  yield all([
      watchFetchNotifications(),
      watchModifyNotification(),
  ])
}