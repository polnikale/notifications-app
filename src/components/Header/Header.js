import React from 'react';
import PropTypes from 'prop-types';

import './Header.css';
import leftArrow from './leftArrow.svg';

class Header extends React.Component {
  static handlePress(event, handler, ...args) {
    if (event.key === 'Enter') {
      handler(...args);
    }
  }

  static propTypes = {
    onBack: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.func,
    ]).isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
  }

  constructor(props) {
    super(props);

    this.handlePress = this.handlePress.bind(this);
  }

  renderControls() {
    const { onBack } = this.props;

    return onBack && (
      <button
        onKeyPress={event => this.constructor.handlePress(event, onBack)}
        onClick={onBack}
        className="back"
        type="button"
      >
        <img src={leftArrow} alt="back" />
      </button>
    );
  }

  render() {
    const { title, children } = this.props;

    const backButton = this.renderControls();

    return (
      <header>
        <div className="left">
          {backButton}
          <h2>
            {title}
          </h2>
        </div>
        {children}
      </header>
    );
  }
}

export default Header;
