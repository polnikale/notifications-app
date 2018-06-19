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
    const { page } = this.props;
    if (page === 'NOTIFICATIONS') {
      return <Notifications 
                notifications={this.props.notifications}
                click={this.handleEditNotification}
                defaultCardClick={this.handleNewCard}/> 
    } else if (page === 'NOTIFICATION_CREATE') {
      return <NotificationCreate />
    } else {
      return <p>Sorry. I don't know what to do</p>
    }
  }

  renderButton() {
    const { page } = this.props;
    if (page === 'NOTIFICATIONS') {
      return (
        <Fragment>
          <img src={plus} alt="plus" /> 
          <span>Создать</span>
        </Fragment>
      )
    } else if (page === 'NOTIFICATION_CREATE') {
      return <span>Сохранить</span>;
    } 
  }

  renderHeaderText() {
    const { page } = this.props;
    if (page === 'NOTIFICATIONS') {
      return 'УВЕДОМЛЕНИЯ'
    } else if (page === 'NOTIFICATION_CREATE') {
      if (this.props.previousNotification.heading !== undefined) {
        return 'Редактирование';
      } else {
        return 'Новое';
      }
    } 
  }

  isNotSaveable() {
    if (this.props.previousNotification.heading !== undefined) {//тогда нужно проверить, не является ли он тем же самым
      return this.checkForIdentity(this.props.previousNotification, this.props.notification) || this.props.notification.heading === '';
    } else {
      return this.props.notification.heading === '';
    }
  }

  isDisabled() {
    const { page  } = this.props;
    if (page === 'NOTIFICATION_CREATE') {
      if (this.isNotSaveable()) {
        return true;
      } else {
        return false
      }
    }
    return 'something';
    //тут есть три варианта. Если возвращает true/false, значит кнопка вообще может быть disabled => это на создании уведомления. Если же она имеет не булевое значение - находится на "Уведомления"
  }

  checkForIdentity(notif1, notif2) {
    let picturesAreEqual;
    if (notif1.pictures.length !== notif2.pictures.length) {
      picturesAreEqual = false;
    } else {
      picturesAreEqual = notif1.pictures.filter((elem, index) => {
        return notif1.pictures[index] !== notif2.pictures[index];
      }).length === 0;
    }
    if (notif1.heading === notif2.heading && notif1.description === notif2.description && picturesAreEqual) return true;
  }

  handleSave() {
    const disabled = this.isDisabled();
    if (disabled === false) {// тогда сохраняем notification
      if (this.props.previousNotification.heading !== undefined) {
        this.props.notificationEditExisted(this.props.previousNotification, this.props.notification);
      } else {
        this.props.notificationSave(this.props.notification);
      }
      this.goBack();
    } else { //в этом случае создаем новый
      this.props.toNotification();
    }
  }

  goBack() {
    this.props.clearNotification();
    this.props.prevNotificationRemove();
    this.props.back();
  }

  handleNewCard() {
    this.props.toNotification();
  }

  handleEditNotification(notification, index) {
    this.props.addNotificationInfoToEdit(notification);
    this.props.setPreviousNotification({...notification, index});
    this.props.toNotification();
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