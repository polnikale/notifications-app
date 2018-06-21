import { connect } from 'react-redux';

import Main from '../components/Main/Main';
import * as routerSelectors from '../reducers/router';
import { getIsLoading } from '../reducers/loading';


const mapStateToProps = (state) => ({
  currentRoute: routerSelectors.getCurrentRoute(state),
  loading: getIsLoading(state)
});

export default connect(
  mapStateToProps
)(Main);