import React, { Fragment } from 'react';
import NotificationCreate from '../NotificationCreate/NotificationCreate';
import Notifications from '../Notifications/Notifications';
import HeaderRoute from '../../containers/HeaderRoute';


function Main(props) {
  let pageToRender;
  if (props.page === 'NOTIFICATION_CREATE') {
    pageToRender = <NotificationCreate /> 
  } else if (props.page === 'NOTIFICATIONS') {
    pageToRender = <Notifications />
  } else {
    pageToRender = <p>Sorry. I don't know what to do</p>
  }
  return(
    <Fragment>
      <main>
        <HeaderRoute />
        {pageToRender}
      </main>
    </Fragment>
  );
}

export default Main;