import { connect } from 'react-redux';
import { returnBack, toNotification, addNotification, clearNotification, addNotificationInfo, removePreviousNotification, setPreviousNotification } from '../actions'
import Main from '../components/Main/Main';

const mapStateToProps = (state) => ({
  notification: state.currentNotification,
  page: state.page.page,
  notifications: state.notifications,
  previousNotification: state.previousNotification
});

const mapDispatchToProps = (dispatch) => ({
  back: () => dispatch(returnBack()),
  toNotification: (notification) => dispatch(toNotification(notification)),
  notificationSave: (notification) => dispatch(addNotification(notification)),
  clearNotification: () => dispatch(clearNotification()),

  addNotificationInfoToEdit: (notification) => dispatch(addNotificationInfo(notification)),
  
  prevNotificationRemove: () => dispatch(removePreviousNotification()),
  setPreviousNotification: (notification) => dispatch(setPreviousNotification(notification)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);