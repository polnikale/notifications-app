import React from 'react';
import styled from 'styled-components';

import Page from '../../containers/Page';
import Button from '../Button/Button';
import plusSvg from './plus.svg';
import defaultSvg from './picture.svg';
import plusBigSvg from './plusBig.svg';
import strings from '../../strings';

const NotificationsWrapper = styled.ul`
  list-style: none;
  padding: 0 0 0 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px,1fr));
  grid-gap: 20px;
`;

const NotificationsFigure = styled.figure`
  overflow: hidden;
  margin: 0;
  height: 100%;
  cursor: pointer;
  background-color: #ffffff;
  border: solid 1px rgba(106, 117, 131, 0.16);
  border-radius: 4px;
  transition: all .3s;
  padding: 0;

  &:hover {
    box-shadow: 0 11px 10px 0 rgba(0, 0, 0, 0.07), 0 4px 6px 0 rgba(0, 0, 0, 0.08);
  }
`;

const Heading = styled.h5`
  margin: 15px;
  font-size: 14px;
  font-weight: 600;
`;

const Image = styled.img`
  max-width: 100%;
`;

const PlusHeading = styled.h6`
  font-size: 14px;
  opacity: 0.2;
  text-align: center;
  font-style: italic;
  color: #000000;
`;

const PlusImage = styled.img`
  margin: 70px auto 30px auto;
  display: block;
  width: 80px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 160px;
  box-sizing: border-box;
  border-bottom: solid 1px rgba(106, 117, 131, 0.16);

  &.default-image {
    padding: 28px 0;
  }
`;

const DefaultImage = styled.img`
  display: block;
  margin: auto;
  width: 146px;
  height: 103px;
  object-fit: contain;
`;





class Notifications extends React.Component {
  constructor(props) {
    super(props);

    this.handleNewCard = this.handleNewCard.bind(this);
    this.handleEditNotification = this.handleEditNotification.bind(this);
  }

  handleNewCard() {
    const { toNotification } = this.props;

    toNotification();
  }

  handleEditNotification(notification, index) {
    const { addNotificationInfoToEdit, toNotification } = this.props;

    addNotificationInfoToEdit(notification, index);
    toNotification();
  }

  renderNotifications() {
    const { notifications } = this.props;
    
    return (
      <NotificationsWrapper>
        {notifications.map((element, index) => {
          return this.renderNotificationCard(element, index) // может быть тут стоило создать еще один компонент notificationCard, но он, по сути, не дублируется, и тогда пришлось бы спускать еще на одну ступень данные/события
        })}
        {this.renderCreateNewCard()}
      </NotificationsWrapper>
    )
  }

  renderNotificationCard(notification, index) {
    return (
      <li key={index} onClick={() => this.handleEditNotification(notification, index)}>
        <NotificationsFigure>
          {this.renderPicture(notification.pictures[0])}
          <figcaption>
            <Heading>{notification.heading}</Heading>
          </figcaption>
        </NotificationsFigure>
      </li>
    );
  }

  renderPicture(picture) {
    return picture ? (
      <ImageWrapper>
        <Image src={picture} alt={picture}/>
      </ImageWrapper>
    ) : (
      <ImageWrapper className="default-image">
        <DefaultImage src={defaultSvg} alt={defaultSvg}/>
      </ImageWrapper>
    )
  }

  renderCreateNewCard() {
    return (
      <li onClick={this.handleNewCard}>
        <NotificationsFigure>
        <PlusImage src={plusBigSvg} alt="newNotification" />
          <figcaption>
            <PlusHeading>{strings.notifications.newNotification}</PlusHeading>
          </figcaption>
        </NotificationsFigure>
      </li>
    )
  }

  render() {
    const notificationsList = this.renderNotifications();

    return (
      <Page 
        renderControls={() => {
          return (
            <div className="controls">
              <Button type="new-button" onPress={this.handleNewCard}>
                <img src={plusSvg} alt="plus" /> 
                <span>Создать</span>
              </Button>
            </div>
          )
        }}
        title={strings.header.mainTitle}
      >
        <div>
          {notificationsList}
        </div>
      </Page>
    )
  }
}

export default Notifications;