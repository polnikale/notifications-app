import { connect } from 'react-redux';

import { changeNotificationInput, removePhoto, addPhoto, getCurrentNotification } from '../reducers/notification'
import NotificationForm from '../components/NotificationForm/NotificationForm';

const mapStateToProps = (state) => ({
  currentNotification: getCurrentNotification(state),
});

const mapDispatchToProps = (dispatch) => ({
  onInputChange: (event) => dispatch(changeNotificationInput(event)),
  onRemovePhoto: (picture) => dispatch(removePhoto(picture)),
  onAddPhoto: (picture) => dispatch(addPhoto(picture))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationForm);