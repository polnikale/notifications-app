import React from 'react';
import './Header.css';
import leftArrow from './leftArrow.svg';

function Header(props) {
  const { title, children, onBack } = props;
  const leftSide = renderLeft();

  function renderLeft() {
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
  return (
    <header>
      {leftSide}
      {children}
    </header>
  );
}

export default Header;