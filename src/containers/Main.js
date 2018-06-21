import { connect } from 'react-redux';

import Main from '../components/Main/Main';
import * as routerSelectors from '../reducers/router';


const mapStateToProps = (state) => ({
  currentRoute: routerSelectors.getCurrentRoute(state)
});

export default connect(
  mapStateToProps
)(Main);