import React from 'react';

import NotificationModify from '../../containers/NotificationModify';
import Notifications from '../../containers/Notifications';
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
    const {
      currentRoute,
      notifications,
      heading,
      description,
      pictures,
      index,
      valid,
      changed
     } = this.props;
     console.log(currentRoute);

    switch(currentRoute) {
      case '':
        return <Notifications />
      case 'modify':
        return <NotificationModify />
      default:
        return <p>Sorry i don't know what to do</p>
    }
  }

  handleSave() {
    const { current, save, index } = this.props;

    save(current, index);

    // if (heading !== undefined) {
    //   notificationEditExisted(current, index);
    // } else {
    //   notificationSave(current);
    // }
    // this.goBack();
  }

  goBack() {
    const { back } = this.props;
    
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
    
    return(
      <main>
        {pageToRender}
      </main>
    );
  }
}

export default Main;