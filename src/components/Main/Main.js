import React from 'react';

import NotificationCreate from '../NotificationCreate/NotificationCreate';
import Notifications from '../Notifications/Notifications';
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
      router,
      notifications,
      heading,
      description,
      pictures,
      index,
      valid,
      changed
     } = this.props;

    switch(router.toString()) {
      case '':
        return <Notifications 
              notifications={notifications}
              click={this.handleEditNotification}
              defaultCardClick={this.handleNewCard}
              editCardClick={this.handleEditNotification}
              />
      case 'modify':
        return <NotificationCreate
              heading={heading}
              description={description}
              pictures={pictures}
              index={index}
              valid={valid}
              changed={changed}
              onBack={this.goBack}
              onSave={this.handleSave}
        />
      default:
        return <p>Sorry i don't know what to do</p>
    }
  }

  handleSave() {
    const { heading, current, index, notificationEditExisted, notificationSave } = this.props;

    if (heading !== undefined) {
      notificationEditExisted(current, index);
    } else {
      notificationSave(current);
    }
    this.goBack();
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