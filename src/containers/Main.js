import { connect } from 'react-redux';

import Main from '../components/Main/Main';
import { getCurrentRoute } from '../reducers/router';
import { asyncFetchNotifications } from '../actions/notifications';

const mapStateToProps = (state) => ({
  currentRoute: getCurrentRoute(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(asyncFetchNotifications())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);