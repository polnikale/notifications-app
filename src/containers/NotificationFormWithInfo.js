import { connect } from 'react-redux';
import { changeNotifInput, removePhoto, addPhoto } from '../actions'
import NotificationForm from '../components/NotificationForm/NotificationForm';

const mapStateToProps = (state) => ({
  heading: state.notification.heading,
  description: state.notification.description,
  pictures: state.notification.pictures
});

const mapDispatchToProps = (dispatch) => ({
  onInputChange: (event) => dispatch(changeNotifInput(event)),
  onRemovePhoto: (picture) => dispatch(removePhoto(picture)),
  onAddPhoto: (event) => dispatch(addPhoto(event))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationForm);