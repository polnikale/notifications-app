import { connect } from 'react-redux';
import { returnBack, toNotifications } from '../actions'
import Main from '../components/Main/Main';

const mapStateToProps = (state) => ({
  heading: state.notification.heading,
  page: state.page.page
});

const mapDispatchToProps = (dispatch) => ({
  back: () => dispatch(returnBack()),
  notifications: () => dispatch(toNotifications())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);