import { connect } from 'react-redux';
import { returnBack, toNotification, addNotification } from '../actions'
import Main from '../components/Main/Main';

const mapStateToProps = (state) => ({
  notification: state.currentNotification,
  page: state.page.page,
  notifications: state.notifications,
});

const mapDispatchToProps = (dispatch) => ({
  back: () => dispatch(returnBack()),
  toNotification: () => dispatch(toNotification()),
  notificationSave: (notification) => dispatch(addNotification(notification))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);