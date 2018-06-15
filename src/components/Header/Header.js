import React from 'react';

function Header(props) {
  console.log(props);
  return (<p>'Hello, i\'m' {props.page.name}</p>);
}

export default Header;