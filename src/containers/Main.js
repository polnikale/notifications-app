import { connect } from 'react-redux';

import {
  returnBack, 
  toNotification, 
  addNotification, 
  clearNotification, 
  addNotificationInfo,
  editExistedNotification 
} from '../actions'
import Main from '../components/Main/Main';
import * as notificationSelectors from '../reducers/notification';
import * as routerSelectors from '../reducers/router';

const mapStateToProps = (state) => ({
  heading: state.modifyNotification.heading,
  description: state.modifyNotification.description,
  pictures: state.modifyNotification.pictures,
  current: state.modifyNotification.current,
  index: state.modifyNotification.index,
  isBackAvailable: routerSelectors.getIsBackAvailable(state),
  notifications: state.notifications,
  valid: notificationSelectors.getIsValid(state),
  changed: notificationSelectors.getIsChanged(state),
});

const mapDispatchToProps = (dispatch) => ({
  back: () => dispatch(returnBack()),
  toNotification: (notification) => dispatch(toNotification(notification)),
  notificationSave: (notification) => dispatch(addNotification(notification)),
  notificationEditExisted: (notification, index) => dispatch(editExistedNotification(notification, index)),
  clearNotification: () => dispatch(clearNotification()),

  addNotificationInfoToEdit: (notification, index) => dispatch(addNotificationInfo(notification, index)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);