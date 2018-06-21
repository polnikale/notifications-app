import { connect } from 'react-redux';

import { returnBack } from '../actions/index';

import Page from '../components/Page/Page';
import { getIsBackAvailable } from '../reducers/router';

const mapStateToProps = (state) => ({
  backAvailable: getIsBackAvailable(state),
});

const mapDispatchToProps = (dispatch) => ({
  back: () => dispatch(returnBack())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);