import { connect } from 'react-redux';
import Phone from '../components/Phone/Phone';

const mapStateToProps = (state) => ({
  heading: state.currentNotification.heading,
  description: state.currentNotification.description,
  picture: state.currentNotification.pictures[0]
});

export default connect(
  mapStateToProps
)(Phone);