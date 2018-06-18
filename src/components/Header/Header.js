import React from 'react';
import './Header.css';

function Header(props) {
  const { title, children, onBack } = props;
  const backBtn = renderBack();

  function renderBack() {
    if (title !== 'УВЕДОМЛЕНИЯ') {
      return (
        <button onClick={onBack} className="back">{'<'}</button>
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