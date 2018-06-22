import { connect } from 'react-redux';

import { addNotificationInfo } from '../actions/notification';
import Notifications from '../components/Notifications/Notifications';
import { getAllNotifications } from '../reducers/notifications';

const mapStateToProps = (state) => ({
  notifications: getAllNotifications(state),
});

const mapDispatchToProps = (dispatch) => ({
  addNotificationInfoToEdit: (notification, index) => dispatch(addNotificationInfo(notification, index)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notifications);