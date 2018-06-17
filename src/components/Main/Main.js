import React from 'react';
import NotificationCreate from '../NotificationCreate/NotificationCreate';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import './Main.css';


class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  renderMain(page) {
    console.log(page);
    if (page === 'NOTIFICATIONSs') {
      return <NotificationCreate /> 
    } else if (page === 'NOTIFICATIONS') {
      return <NotificationCreate />
    } else {
      return <p>Sorry. I don't know what to do</p>
    }
  }

  render() {
    const { page } = this.props;

    const pageToRender = this.renderMain(page);
    
    return(
      <main>
        <Header
          title='Уведомления'
        >
          <button>
          sasas
          </button>
        </Header>
        {pageToRender}
      </main>
    );
  }
}

export default Main;