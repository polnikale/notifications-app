import React from 'react';
import { browserHistory } from 'react-router'

import Page from '../Page/Page';
import Button from '../Button/Button';
import plusSvg from './plus.svg';
import defaultSvg from './picture.svg';
import plusBigSvg from './plusBig.svg';
import strings from '../../strings';
import './Notifications.css';

class Notifications extends React.Component {
  constructor(props) {
    super(props);

    this.handleNewCard = this.handleNewCard.bind(this);
    this.handleEditNotification = this.handleEditNotification.bind(this);
  }

  handleNewCard() {
    browserHistory.push('/modify');
  }

  handleEditNotification(notification, index) {
    const { addNotificationInfoToEdit } = this.props;

    addNotificationInfoToEdit(notification, index);
    browserHistory.push('modify');
    console.log(browserHistory);
  }

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
    return (
      <li key={index} onClick={() => this.handleEditNotification(notification, index)}>
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
    return (
      <li className="plus" onClick={this.handleNewCard}>
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
    const notificationsList = this.renderNotifications();

    return (
      <div className="wrapper">
        <aside/>
        <main>
          <Page 
            renderControls={() => {
              return (
                <div className="controls">
                  <Button type="new-btn" onPress={this.handleNewCard}>
                    <img src={plusSvg} alt="plus" /> 
                    <span>Создать</span>
                  </Button>
                </div>
              )
            }}
            title={strings.header.mainTitle}
            route={this.props.route.path}
            back={browserHistory.goBack}
          >
            <div className="notifications">
              {notificationsList}
            </div>
          </Page>
        </main>
      </div>
    )
  }
}

export default Notifications;