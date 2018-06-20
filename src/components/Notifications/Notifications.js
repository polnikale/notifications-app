import React, { Fragment } from 'react';

import Page from '../Page/Page';
import Button from '../Button/Button';
import plusSvg from './plus.svg';
import defaultSvg from './picture.svg';
import plusBigSvg from './plusBig.svg';
import strings from '../../strings';
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
    const { editCardClick } = this.props;

    return (
      <li key={index} onClick={() => editCardClick(notification, index)}>
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
      <div className="image">
        <img src={picture} alt={picture}/>
      </div>
    ) : (
      <div className="image defaultImage">
        <img src={defaultSvg} alt={defaultSvg}/>
      </div>
    )
  }

  renderCreateNewCard() {
    const { defaultCardClick } = this.props;

    return (
      <li className="plus" onClick={defaultCardClick}>
        <figure>
        <img src={plusBigSvg} alt="newNotification" />
          <figcaption>
            <h6>{strings.notifications.newNotification}</h6>
          </figcaption>
        </figure>
      </li>
    )
  }

  render() {
    const { defaultCardClick } = this.props;

    const notificationsList = this.renderNotifications();

    return (
      <Page render={(Elem) => {
        return (
          <Elem title={strings.header.mainTitle}>
            <Button type="new-btn" onPress={defaultCardClick}>
              <Fragment>
                <img src={plusSvg} alt="plus" /> 
                <span>Создать</span>
              </Fragment>
            </Button>
          </Elem>
        )
      }}>
        <div className="notifications">
          {notificationsList}
        </div>
      </Page>
    )
  }
}

export default Notifications;