import React from 'react';

import './NotificationCreate.css';
import Phone from '../../containers/Phone';
import NotificationForm from '../../containers/NotificationForm';


class NotificationCreate extends React.Component {
  render() {
    return(
      <div className="notificationCreate-wrapper">
        <Phone/>
        <NotificationForm />
      </div>
    )
  }
}



export default NotificationCreate;