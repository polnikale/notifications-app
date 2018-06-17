import React from 'react';
import defaultSvg from './picture.svg';
import './Notifications.css';

function Notifications(props) {
  const { notifications } = props;

  const notificationsList = renderNotifications();

  function renderNotifications() {
    return (
      <ul>
        {notifications.map((element, index) => {
          return renderNotificationCard(element)
        })}
      </ul>
    )
  }

  function renderNotificationCard(notification) {
    const imgSrc = notification.pictures[0] || defaultSvg;
    return (
      <li key={notifications}>
        <figure onClick={props.click()}>
          <img src={imgSrc} alt={imgSrc} />
          <figcaption>
            <h5>{notification.heading}</h5>
          </figcaption>
        </figure>
      </li>
    );
  }
  
  return (
    <div className="notifications">
      {notificationsList}
    </div>
  )
}

export default Notifications;