import { connect } from 'react-redux';

import Phone from '../components/Phone/Phone';
import { getCurrentNotification } from '../reducers/notification';

const mapStateToProps = (state) => ({
  currentNotification: getCurrentNotification(state)
});

export default connect(
  mapStateToProps
)(Phone);