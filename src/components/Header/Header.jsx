import React from 'react';
import PropTypes from 'prop-types';

import './Header.css';
import leftArrow from './leftArrow.svg';

class Header extends React.Component {
  static propTypes = {
    onBack: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.children.isRequired,
  }

  renderControls() {
    const { onBack } = this.props;

    return onBack && (
      <button
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
