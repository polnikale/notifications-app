import React from 'react';
import defaultSvg from './picture.svg';
import plusSvg from './plus.svg';
import './Notifications.css';

class Notifications extends React.Component {

  renderNotifications() {
    const { notifications } = this.props;
    
    return (
      <ul>
        {notifications.map((element, index) => {
          return this.renderNotificationCard(element, index) // может быть тут стоило создать еще один компонент notificationCard, но он, по сути, не дублируется, и тогда пришлось бы спускать еще на одну ступень данные/события
        })}
        {this.renderCreateNewCard()}
      </ul>
    )
  }

  renderNotificationCard(notification, index) {
    const { click } = this.props;

    return (
      <li key={index} onClick={() => click(notification, index)}>
        <figure>
          {this.renderPicture(notification.pictures[0])}
          <figcaption>
            <h5>{notification.heading}</h5>
          </figcaption>
        </figure>
      </li>
    );
  }

  renderPicture(picture) {
    return picture ? (
      <div className="img">
        <img src={picture} alt={picture}/>
      </div>
    ) : (
      <div className="img defaultImg">
        <img src={defaultSvg} alt={defaultSvg}/>
      </div>
    )
  }

  renderCreateNewCard() {
    const { defaultCardClick } = this.props;

    return (
      <li className="plus" onClick={() => defaultCardClick()}>
        <figure>
        <img src={plusSvg} alt="newNotification" />
          <figcaption>
            <h6>Создать еще одну рассылку</h6>
          </figcaption>
        </figure>
      </li>
    )
  }

  render() {
    const notificationsList = this.renderNotifications();

    return (
      <div className="notifications">
        {notificationsList}
      </div>
    )
  }
}

export default Notifications;