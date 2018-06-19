import React from 'react';
import './Header.css';
import leftArrow from './leftArrow.svg';

class Header extends React.Component {

  renderLeft(title, onBack) {
    if (title !== 'УВЕДОМЛЕНИЯ') {
      return (
        <div className="left">
          <button onClick={onBack} className="back">
            <img src={leftArrow} alt="back" />
          </button>
          <h2>{title}</h2>
        </div>
      )
    } else {
      return <h2>{title}</h2>;
    }
  }
  render() {
    const { title, children, onBack } = this.props;
    const leftSide = this.renderLeft(title, onBack);

    return (
      <header>
        {leftSide}
        {children}
      </header>
    );
  }
}

export default Header;