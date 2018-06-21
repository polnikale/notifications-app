import React from 'react';

import NotificationModify from '../../containers/NotificationModify';
import Notifications from '../../containers/Notifications';
import './Main.css';


class Main extends React.Component {
  renderMain() {
    const { currentRoute } = this.props;

    switch(currentRoute) {
      case '':
        return <Notifications />
      case 'modify':
        return <NotificationModify />
      default:
        return <p>Sorry i don't know what to do</p>
    }

    
  }

  componentDidMount() {
    const { fetchData } = this.props;

    fetchData();
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