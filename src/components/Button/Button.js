import React from 'react';

import './Button.css';

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  computeClasses() {
    const { disabled } = this.props;

    if (disabled === true) return 'save-btn disabled';
    else if (disabled === false ) return 'save-btn';
    else return 'new-btn';
  }

  handleClick() {
    const { disabled, onPress } = this.props;

    if (disabled === true) return false;
    onPress();
  }

  render() {
    const { children } = this.props;

    const classes = this.computeClasses();
    return (
      <button 
        className={classes} 
        onClick={this.handleClick}
      >
        {children}
      </button>
    )
  }
}

export default Button;