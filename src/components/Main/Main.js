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
  }
  renderMain() {
    const { page } = this.props;
    if (page === 'NOTIFICATIONS') {
      return <Notifications /> 
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
      return 'Сохранить';
    } 
  }

  isDisabled() {
    const { page, heading  } = this.props;
    if (page === 'NOTIFICATION_CREATE') {
      if (heading === '') {
        return true;
      } else {
        return false
      }
    }
    return 'something';
    //тут есть три варианта. Если возвращает true/false, значит кнопка вообще может быть disabled => это на создании уведомления. Если же она имеет не булевое значение - находится на "Уведомления"
  }
  handleSave() {
    return false;
  }

  render() {
    const pageToRender = this.renderMain();
    const button = this.renderButton();
    
    return(
      <main>
        <Header
          title='Уведомления'
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