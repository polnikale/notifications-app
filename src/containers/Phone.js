import { connect } from 'react-redux';

import Phone from '../components/Phone/Phone';

const mapStateToProps = (state) => ({
  heading: state.modifyNotification.current.heading,
  description: state.modifyNotification.current.description,
  picture: state.modifyNotification.current.pictures[0]
});

export default connect(
  mapStateToProps
)(Phone);