import { connect } from 'react-redux';

import {
  returnBack, 
  toNotification, 
  saveNotification,
  addNotificationInfo,
} from '../actions';
import Notifications from '../components/Notifications/Notifications';
import * as notificationsSelectors from '../reducers/notifications';


              // notifications={notifications}
              // click={this.handleEditNotification}
              // defaultCardClick={this.handleNewCard}
              // editCardClick={this.handleEditNotification}
              


const mapStateToProps = (state) => ({
  notifications: notificationsSelectors.getAllNotifications(state),
});

const mapDispatchToProps = (dispatch) => ({
  back: () => dispatch(returnBack()),
  toNotification: (notification) => dispatch(toNotification(notification)),
  save: (notification, index) => dispatch(saveNotification(notification, index)),

  addNotificationInfoToEdit: (notification, index) => dispatch(addNotificationInfo(notification, index)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notifications);