import { connect } from 'react-redux';
import Phone from '../components/Phone/Phone';

const mapStateToProps = (state) => ({
  heading: state.notification.heading,
  description: state.notification.description,
  picture: state.notification.pictures[0]
});

export default connect(
  mapStateToProps
)(Phone);