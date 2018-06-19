import { connect } from 'react-redux';
import {
  returnBack, 
  toNotification, 
  addNotification, 
  clearNotification, 
  addNotificationInfo, 
  removePreviousNotification, 
  setPreviousNotification, 
  editExistedNotification 
} from '../actions'
import Main from '../components/Main/Main';

const mapStateToProps = (state) => ({
  notification: state.currentNotification,
  router: state.router,
  notifications: state.notifications,
  previousNotification: state.previousNotification
});

const mapDispatchToProps = (dispatch) => ({
  back: () => dispatch(returnBack()),
  toNotification: (notification) => dispatch(toNotification(notification)),
  notificationSave: (notification) => dispatch(addNotification(notification)),
  notificationEditExisted: (prevNotification, notification) => dispatch(editExistedNotification(prevNotification, notification)),
  clearNotification: () => dispatch(clearNotification()),

  addNotificationInfoToEdit: (notification) => dispatch(addNotificationInfo(notification)),
  
  previousNotificationRemove: () => dispatch(removePreviousNotification()),
  setPreviousNotification: (notification) => dispatch(setPreviousNotification(notification)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);