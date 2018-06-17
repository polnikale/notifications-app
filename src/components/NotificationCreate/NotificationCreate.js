import React from 'react';
import './NotificationCreate.css';
import PhoneWithInfo from '../../containers/PhoneWithInfo';
import NotificationFormWithInfo from '../../containers/NotificationFormWithInfo';


function NotificationCreate() {
  return(
    <div className="notifCreate-wrapper">
      <PhoneWithInfo/>
      <NotificationFormWithInfo />
    </div>
  )
}



export default NotificationCreate;