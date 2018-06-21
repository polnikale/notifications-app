import React from 'react';

import NotificationModify from '../../containers/NotificationModify';
import Notifications from '../../containers/Notifications';
import * as notificationActions from '../../actions/notifications';
import './Main.css';


class Main extends React.Component {
  renderMain() {
    const { currentRoute, loading } = this.props;
    console.log(loading);

    if (loading) {
      return <h1>Wait a second, please </h1>
    } else {
      switch(currentRoute) {
        case '':
          return <Notifications />
        case 'modify':
          return <NotificationModify />
        default:
          return <p>Sorry i don't know what to do</p>
      }
    }
  }

  componentDidMount() {
    this.props.dispatch(notificationActions.fetchNotifications());
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