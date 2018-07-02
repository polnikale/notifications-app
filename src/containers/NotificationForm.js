import { connect } from 'react-redux';

import { changeNotificationInput, removePhoto, addPhoto } from '../actions/notification';
import NotificationForm from '../components/NotificationForm/NotificationForm';

import { getCurrentNotification } from '../reducers/notification';

const mapStateToProps = state => ({
  currentNotification: getCurrentNotification(state),
});

const mapDispatchToProps = dispatch => ({
  onInputChange: event => dispatch(changeNotificationInput(event)),
  onRemovePhoto: picture => dispatch(removePhoto(picture)),
  onAddPhoto: picture => dispatch(addPhoto(picture)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotificationForm);
