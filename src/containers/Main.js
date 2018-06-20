import { connect } from 'react-redux';

import {
  returnBack, 
  toNotification, 
  addNotification, 
  addNotificationInfo,
  editExistedNotification 
} from '../actions'
import Main from '../components/Main/Main';
import * as notificationSelectors from '../reducers/notification';
import * as routerSelectors from '../reducers/router';
import * as notificationsSelectors from '../reducers/notifications';


const mapStateToProps = (state) => ({
  heading: notificationSelectors.getPreviousHeading(state),
  description: notificationSelectors.getPreviousDescription(state),
  pictures: notificationSelectors.getPreviousPictures(state),
  current: notificationSelectors.getCurrentNotification(state),
  index: notificationSelectors.getPreviousIndex(state),
  router: routerSelectors.getRouter(state),
  notifications: notificationsSelectors.getAllNotifications(state),
  valid: notificationSelectors.getIsValid(state),
  changed: notificationSelectors.getIsChanged(state),
});

const mapDispatchToProps = (dispatch) => ({
  back: () => dispatch(returnBack()),
  toNotification: (notification) => dispatch(toNotification(notification)),
  notificationSave: (notification) => dispatch(addNotification(notification)),
  notificationEditExisted: (notification, index) => dispatch(editExistedNotification(notification, index)),

  addNotificationInfoToEdit: (notification, index) => dispatch(addNotificationInfo(notification, index)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);