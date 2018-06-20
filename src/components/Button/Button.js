import React from 'react';

import './Button.css';

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  computeClasses() {
    const { disabled, type } = this.props;

    let className = type;
    if (disabled === true) {
      className += ' disabled';
    }

    return className;
  }

  handleClick() {
    const { disabled, onPress } = this.props;

    if (disabled === true) return false;
    onPress();
  }

  render() {
    const { children } = this.props;

    const classes = this.computeClasses();
    console.log(classes);
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