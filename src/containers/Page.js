import { connect } from 'react-redux';

import { returnBack } from '../actions/common';

import Page from '../components/Page/Page';

const mapDispatchToProps = (dispatch) => ({
  back: () => dispatch(returnBack())
});

export default connect(
  null,
  mapDispatchToProps
)(Page);