import React from 'react';
import './Button.css';

function Button(props) {
  const { disabled, onPress, children } = props;

  function computeClasses() {
    if (disabled === true) return 'save-btn disabled';
    else if (disabled === false ) return 'save-btn';
    else return 'new-btn';
  }

  function handleClick() {
    if (disabled === true) return false;
    props.onPress();
  }

  const classes = computeClasses();
  return (
    <button 
      className={classes} 
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default Button;