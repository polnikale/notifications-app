import React from 'react';
import PropTypes from 'prop-types';

import Page from '../../containers/Page';
import './NotificationModify.css';
import Phone from '../../containers/Phone';
import Button from '../Button/Button';
import strings from '../../strings';
import NotificationForm from '../../containers/NotificationForm';


class NotificationCreate extends React.Component {
  static propTypes = {
    heading: PropTypes.oneOfType([
      PropTypes.undefined,
      PropTypes.string,
    ]),
    valid: PropTypes.bool.isRequired,
    changed: PropTypes.bool.isRequired,
    current: PropTypes.shape({
      heading: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      pictures: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
    save: PropTypes.func.isRequired,
    index: PropTypes.number,
  }

  static defaultProps = {
    heading: undefined,
    index: undefined,
  }

  constructor(props) {
    super(props);

    this.handleSave = this.handleSave.bind(this);
  }

  disabled() {
    const { valid, changed } = this.props;

    return !(valid && changed);
  }

  handleSave() {
    const { current, save, index } = this.props;

    save(current, index);
  }

  renderHeaderText() {
    const { heading } = this.props;

    if (heading === undefined) {
      return strings.header.newTitle;
    }
    return strings.header.editTitle;
  }

  render() {
    const headerTitle = this.renderHeaderText();
    const buttonDisabled = this.disabled();

    return (
      <Page
        renderControls={() => (
          <div className="controls">
            <Button type="save-btn" onPress={this.handleSave} disabled={buttonDisabled}>
              Сохранить
            </Button>
          </div>
        )}
        title={headerTitle}
      >
        <div className="notificationCreate-wrapper">
          <Phone />
          <NotificationForm />
        </div>
      </Page>
    );
  }
}


export default NotificationCreate;
