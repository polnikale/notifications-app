import { call, put, takeLatest, all } from 'redux-saga/effects';

import LocalStorageService from './service/localstorage';
import * as notificationsActions from './actions/notifications';

function* fetchNotifications() {
  const notifications = yield call(LocalStorageService.getNotifications);
  

  yield put(notificationsActions.fetchNotifications(notifications));
}

function* watchFetchNotifications() {
  yield takeLatest(notificationsActions.ASYNC_FETCH_NOTIFICATIONS, fetchNotifications);
}

export default function* rootSaga() {
  yield all([
      watchFetchNotifications()
  ])
}