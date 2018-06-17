import { connect } from 'react-redux';
import Phone from '../components/Phone/Phone';

const mapStateToProps = (state) => ({
  notifInfo: state.notification
});

export default connect(
  mapStateToProps
)(Phone);