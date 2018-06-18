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
          return renderNotificationCard(element, index) // может быть тут стоило создать еще один компонент notificationCard, но он, по сути, не дублируется, и тогда пришлось бы спускать еще на одну ступень данные/события
        })}
        {renderCreateNewCard()}
      </ul>
    )
  }

  function renderNotificationCard(notification, index) {
    const imgSrc = notification.pictures[0] || defaultSvg;
    return (
      <li key={index} onClick={() => props.click(notification, index)}>
        <figure>
          <img src={imgSrc} alt={imgSrc} />
          <figcaption>
            <h5>{notification.heading}</h5>
          </figcaption>
        </figure>
      </li>
    );
  }

  function renderCreateNewCard() {

  }
  
  return (
    <div className="notifications">
      {notificationsList}
    </div>
  )
}

export default Notifications;