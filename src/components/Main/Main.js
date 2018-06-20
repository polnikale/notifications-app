import React, { Fragment } from 'react';

import NotificationCreate from '../NotificationCreate/NotificationCreate';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Button from '../Button/Button';
import plus from './plus.svg';
import './Main.css';


class Main extends React.Component {
  constructor(props) { //не знаю вообще, есть ли у меня тут смысл использования statefull компонента, ведь state-а самого у меня нет, но при этом компонент достаточно нагружен
    super(props);

    this.handleSave = this.handleSave.bind(this);
    this.handleEditNotification = this.handleEditNotification.bind(this);
    this.handleNewCard = this.handleNewCard.bind(this);
    this.goBack = this.goBack.bind(this);
  }
  renderMain() {
    const { router } = this.props;
    if (router === 'NOTIFICATIONS') {
      return <Notifications 
                notifications={this.props.notifications}
                click={this.handleEditNotification}
                defaultCardClick={this.handleNewCard}/> 
    } else if (router === 'NOTIFICATION_CREATE') {
      return <NotificationCreate />
    } else {
      return <p>Sorry. I don't know what to do</p>
    }
  }

  renderButton() {
    const { router } = this.props;
    if (router === 'NOTIFICATIONS') {
      return (
        <Fragment>
          <img src={plus} alt="plus" /> 
          <span>Создать</span>
        </Fragment>
      )
    } else if (router === 'NOTIFICATION_CREATE') {
      return <span>Сохранить</span>;
    } 
  }

  renderHeaderText() {
    const { router, heading } = this.props;
    if (router === 'NOTIFICATIONS') {
      return 'УВЕДОМЛЕНИЯ'
    } else if (router === 'NOTIFICATION_CREATE') {
      if (heading !== undefined) {
        return 'Редактирование';
      } else {
        return 'Новое';
      }
    } 
  }

  isNotSaveable() {
    const { valid, changed } = this.props;
    console.log('changed',changed);
    console.log('valid', valid);
    // if (previousNotification.heading !== undefined) {//тогда нужно проверить, не является ли он тем же самым
    //   return this.checkForIdentity(previousNotification, notification) || notification.heading === '';
    // } else {
    //   return notification.heading === '';
    // }
    return valid && changed;
  }

  isDisabled() {
    const { router  } = this.props;
    if (router === 'NOTIFICATION_CREATE') {
      return !this.isNotSaveable();
    }
    return 'something';
    //тут есть три варианта. Если возвращает true/false, значит кнопка вообще может быть disabled => это на создании уведомления. Если же она имеет не булевое значение - находится на "Уведомления"
  }

  handleSave() {
    const { heading, current, index, notificationEditExisted, notificationSave, toNotification } = this.props;

    const disabled = this.isDisabled();
    if (disabled === false) {// тогда сохраняем notification
      if (heading !== undefined) {
        notificationEditExisted(current, index);
      } else {
        notificationSave(current);
      }
      this.goBack();
    } else { //в этом случае создаем новый
      toNotification();
    }
  }

  goBack() {
    const { clearNotification, back } = this.props;

    clearNotification();
    back();
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

  render() {
    const pageToRender = this.renderMain();
    const button = this.renderButton();
    const headerTitle = this.renderHeaderText();
    
    return(
      <main>
        <Header
          title={headerTitle}
          onBack={this.goBack}
        >
          <Button 
            disabled={this.isDisabled()}
            onPress={this.handleSave}>
            {button}
          </Button>
        </Header>
        {pageToRender}
      </main>
    );
  }
}

export default Main;