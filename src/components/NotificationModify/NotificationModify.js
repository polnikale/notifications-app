import React from 'react';

import Page from '../../containers/Page';
import './NotificationModify.css';
import Phone from '../../containers/Phone';
import Button from '../Button/Button';
import strings from '../../strings';
import NotificationForm from '../../containers/NotificationForm';


class NotificationCreate extends React.Component {
  constructor(props) {
    super(props);

    this.handleSave = this.handleSave.bind(this);
  }

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

  handleSave() {
    const { current, save, index } = this.props;

    save(current, index);
  }

  render() {
    const headerTitle = this.renderHeaderText();
    const buttonDisabled = this.disabled();

    return(
      <Page 
        renderControls={() => {
          return (
            <div className="controls">
              <Button type="save-btn" onPress={this.handleSave} disabled={buttonDisabled}>Сохранить</Button>
            </div>
          )
        }} 
        title={headerTitle}
      >
        <div className="notificationCreate-wrapper">
          <Phone/>
          <NotificationForm />
        </div>
      </Page>
    )
  }
}



export default NotificationCreate;