import { connect } from 'react-redux';

import {
  returnBack, 
  toNotification, 
  saveNotification,
  addNotificationInfo,
} from '../actions'
import NotificationModify from '../components/NotificationModify/NotificationModify';
import * as notificationSelectors from '../reducers/notification';

// heading={heading}
              // description={description}
              // pictures={pictures}
              // index={index}
              // valid={valid}
              // changed={changed}
              // onBack={this.goBack}
              // onSave={this.handleSave}


const mapStateToProps = (state) => ({
  heading: notificationSelectors.getPreviousHeading(state),
  description: notificationSelectors.getPreviousDescription(state),
  pictures: notificationSelectors.getPreviousPictures(state),
  current: notificationSelectors.getCurrentNotification(state),
  index: notificationSelectors.getPreviousIndex(state),
  valid: notificationSelectors.getIsValid(state),
  changed: notificationSelectors.getIsChanged(state),
});

const mapDispatchToProps = (dispatch) => ({
  back: () => dispatch(returnBack()),
  toNotification: (notification) => dispatch(toNotification(notification)),
  save: (notification, index) => dispatch(saveNotification(notification, index)),

  addNotificationInfoToEdit: (notification, index) => dispatch(addNotificationInfo(notification, index)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationModify);