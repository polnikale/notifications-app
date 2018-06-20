import React from 'react';

import Page from '../Page/Page';
import './NotificationCreate.css';
import Phone from '../../containers/Phone';
import Button from '../Button/Button';
import strings from '../../strings';
import NotificationForm from '../../containers/NotificationForm';


class NotificationCreate extends React.Component {
  renderHeaderText() {
    const { heading } = this.props;
    if (heading === undefined) {
      return strings.header.newTitle;
    } else {
      return strings.header.editTitle;
    }
  }

  disabled() {
    const { valid, changed } = this.props;

    return !(valid && changed);
  }

  render() {
    const { onBack, onSave } = this.props;

    const headerTitle = this.renderHeaderText();
    const buttonDisabled = this.disabled();

    return(
      <Page render={(Elem) => {
        return (
          <Elem title={headerTitle} onBack={onBack}>
            <Button type="save-btn" onPress={onSave} disabled={buttonDisabled}>Сохранить</Button>
          </Elem>
        )
      }}>
        <div className="notificationCreate-wrapper">
          <Phone/>
          <NotificationForm />
        </div>
      </Page>
    )
  }
}



export default NotificationCreate;