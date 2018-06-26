import { connect } from 'react-redux';

import { modifyNotifications } from '../reducers/notifications'
import NotificationModify from '../components/NotificationModify/NotificationModify';
import * as notification from '../reducers/notification';


const mapStateToProps = (state) => ({
  heading: notification.getPreviousHeading(state),
  current: notification.getCurrentNotification(state),
  index: notification.getPreviousIndex(state),
  valid: notification.getIsValid(state),
  changed: notification.getIsChanged(state),
});

const mapDispatchToProps = (dispatch) => ({
  save: (notification, index) => dispatch(modifyNotifications(notification, index)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationModify);