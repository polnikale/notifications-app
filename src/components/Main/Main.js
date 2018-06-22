import React from 'react';
import styled from 'styled-components';

import NotificationModify from '../../containers/NotificationModify';
import Notifications from '../../containers/Notifications';

const MainWrapper = styled.main`
  padding-right: 310px;
  background-color: #f3f3f3;
  position: relative;
  flex-basis: calc(100% - 240px);

  @media (max-width: 1180px) {
    padding-right: 150px;
  }

  @media (max-width: 960px) {
    padding-right: 70px;
  }
  
  @media (max-width: 680px) {
    padding-right: 20px;
  }
`;


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

  render() {
    const pageToRender = this.renderMain();
    
    return(
      <MainWrapper>
        {pageToRender}
      </MainWrapper>
    );
  }
}

export default Main;