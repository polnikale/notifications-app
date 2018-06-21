import { connect } from 'react-redux';

import Main from '../components/Main/Main';
import * as routerSelectors from '../reducers/router';
import { getIsLoading } from '../reducers/loading';
import * as notificationsActions from '../actions/notifications';


const mapStateToProps = (state) => ({
  currentRoute: routerSelectors.getCurrentRoute(state),
  loading: getIsLoading(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(notificationsActions.fetchNotifications())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);