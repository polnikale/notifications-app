import React from 'react';

import './Header.css';
import leftArrow from './leftArrow.svg';

class Header extends React.Component {
  renderControls() {
    const { onBack } = this.props;

    return onBack && 
    <button onClick={onBack} className="back">
      <img src={leftArrow} alt="back" />
    </button>
  }

  render() {
    const { title, children } = this.props;

    const backButton = this.renderControls();

    return (
      <header>
        <div className="left">
          {backButton}
          <h2>{title}</h2>
        </div>
        {children}
      </header>
    );
  }
}

export default Header;