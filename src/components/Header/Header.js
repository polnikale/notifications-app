import React from 'react';

function Header(props) {
  const { title, children } = props;
  return (
    <header>
      <h2>{title.toUpperCase()}</h2>
      {children}
    </header>
  );
}

export default Header;