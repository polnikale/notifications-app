import { connect } from 'react-redux';

import { saveNotification } from '../actions/common';
import NotificationModify from '../components/NotificationModify/NotificationModify';
import * as notificationSelectors from '../reducers/notification';


const mapStateToProps = state => ({
  heading: notificationSelectors.getPreviousHeading(state),
  current: notificationSelectors.getCurrentNotification(state),
  index: notificationSelectors.getPreviousIndex(state),
  valid: notificationSelectors.getIsValid(state),
  changed: notificationSelectors.getIsChanged(state),
});

const mapDispatchToProps = dispatch => ({
  save: (notification, index) => dispatch(saveNotification(notification, index)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotificationModify);
