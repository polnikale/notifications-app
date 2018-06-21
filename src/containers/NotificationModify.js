import { connect } from 'react-redux';

import { asyncModifyNotification } from '../actions/notifications'
import NotificationModify from '../components/NotificationModify/NotificationModify';
import * as notificationSelectors from '../reducers/notification';


const mapStateToProps = (state) => ({
  heading: notificationSelectors.getPreviousHeading(state),
  current: notificationSelectors.getCurrentNotification(state),
  index: notificationSelectors.getPreviousIndex(state),
  valid: notificationSelectors.getIsValid(state),
  changed: notificationSelectors.getIsChanged(state),
});

const mapDispatchToProps = (dispatch) => ({
  save: (notification, index) => dispatch(asyncModifyNotification(notification, index)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationModify);