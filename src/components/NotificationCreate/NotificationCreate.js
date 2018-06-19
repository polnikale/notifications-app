import React from 'react';
import './NotificationCreate.css';
import PhoneWithInfo from '../../containers/PhoneWithInfo';
import NotificationFormWithInfo from '../../containers/NotificationFormWithInfo';


class NotificationCreate extends React.Component {
  render() {
    return(
      <div className="notifCreate-wrapper">
        <PhoneWithInfo/>
        <NotificationFormWithInfo />
      </div>
    )
  }
}



export default NotificationCreate;