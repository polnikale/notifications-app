import { connect } from 'react-redux';

import { changeNotificationInput, removePhoto, addPhoto } from '../actions'
import NotificationForm from '../components/NotificationForm/NotificationForm';

const mapStateToProps = (state) => ({
  heading: state.modifyNotification.current.heading,
  description: state.modifyNotification.current.description,
  pictures: state.modifyNotification.current.pictures
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