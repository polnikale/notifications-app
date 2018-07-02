import React from 'react';
import PropTypes from 'prop-types';

import Page from '../../containers/Page';
import Button from '../Button/Button';
import plusSvg from './plus.svg';
import defaultSvg from './picture.svg';
import plusBigSvg from './plusBig.svg';
import strings from '../../strings';
import './Notifications.css';

class Notifications extends React.Component {
  static propTypes = {
    toNotification: PropTypes.func.isRequired,
    addNotificationInfoToEdit: PropTypes.func.isRequired,
    notifications: PropTypes.arrayOf(PropTypes.shape({
      heading: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      pictures: PropTypes.arrayOf(PropTypes.string),
    })).isRequired,

  }

  constructor(props) {
    super(props);

    this.handleNewCard = this.handleNewCard.bind(this);
    this.handleEditNotification = this.handleEditNotification.bind(this);
    this.handlePress = this.handlePress.bind(this);
  }

  handleNewCard() {
    const { toNotification } = this.props;

    toNotification();
  }

  handlePress(event, handler, ...args) {
    if (event.key === 'Enter') {
      handler(...args);
    }
  }

  handleEditNotification(notification, index) {
    const { addNotificationInfoToEdit, toNotification } = this.props;

    addNotificationInfoToEdit(notification, index);
    toNotification();
  }

  renderNotifications() {
    const { notifications } = this.props;

    return (
      <ul>
        {notifications.map((element, index) => this.renderNotificationCard(element, index))}
        {this.renderCreateNewCard()}
      </ul>
    );
  }

  renderNotificationCard(notification, index) {
    return (
      <li
        key={index}
        tabIndex="0"
        onClick={() => this.handleEditNotification(notification, index)}
        onKeyPress={(event) => (
          this.handlePress(event, this.handleEditNotification, notification, index)
        )}
      >
        <figure>
          {this.renderPicture(notification.pictures[0])}
          <figcaption>
            <h5>
              {notification.heading}
            </h5>
          </figcaption>
        </figure>
      </li>
    );
  }

  renderPicture(picture) {
    return picture ? (
      <div className="image chosenImage" style={{ backgroundImage: `url(${picture})` }} />
    ) : (
      <div className="image defaultImage">
        <img src={defaultSvg} alt={defaultSvg} />
      </div>
    );
  }

  renderCreateNewCard() {
    return (
      <li
        className="plus"
        tabIndex="0"
        onClick={this.handleNewCard}
        onKeyPress={event => this.handlePress(event, this.handleNewCard)}
      >
        <figure>
          <img src={plusBigSvg} alt="newNotification" />
          <figcaption>
            <h6>
              {strings.notifications.newNotification}
            </h6>
          </figcaption>
        </figure>
      </li>
    );
  }

  render() {
    const notificationsList = this.renderNotifications();

    return (
      <Page
        renderControls={() => (
          <div className="controls">
            <Button type="new-btn" onPress={this.handleNewCard} disabled={false}>
              <img src={plusSvg} alt="plus" />
              <span>
                Создать
              </span>
            </Button>
          </div>
        )}
        title={strings.header.mainTitle}
      >
        <div className="notifications">
          {notificationsList}
        </div>
      </Page>
    );
  }
}

export default Notifications;
