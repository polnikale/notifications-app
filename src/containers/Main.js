import { connect } from 'react-redux';

import Main from '../components/Main/Main';
import * as router from '../reducers/router';
import { getIsLoading } from '../reducers/loading';
import * as notifications from '../reducers/notifications';


const mapStateToProps = (state) => ({
  currentRoute: router.getCurrentRoute(state),
  loading: getIsLoading(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(notifications.fetchNotifications())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);