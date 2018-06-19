import React from 'react';
import './Header.css';
import leftArrow from './leftArrow.svg';

function Header(props) {
  const { title, children, onBack } = props;
  const backBtn = renderBack();

  function renderBack() {
    if (title !== 'УВЕДОМЛЕНИЯ') {
      return (
        <button onClick={onBack} className="back">
          <img src={leftArrow} alt="back" />
        </button>
      )
    }
  }
  return (
    <header>
      {backBtn}
      <h2>{title}</h2>
      {children}
    </header>
  );
}

export default Header;