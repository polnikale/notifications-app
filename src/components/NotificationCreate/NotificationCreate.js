import React from 'react';

import './NotificationCreate.css';
import Phone from '../../containers/Phone';
import Notification from '../../containers/Notification';


class NotificationCreate extends React.Component {
  render() {
    return(
      <div className="notificationCreate-wrapper">
        <Phone/>
        <Notification />
      </div>
    )
  }
}



export default NotificationCreate;