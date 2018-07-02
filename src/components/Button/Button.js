import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

class Button extends React.Component {
  static propTypes = {
    disabled: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
  }

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
    return false;
  }

  render() {
    const { children } = this.props;

    const classes = this.computeClasses();

    return (
      <button
        type="submit"
        className={classes}
        onClick={this.handleClick}
      >
        {children}
      </button>
    );
  }
}

export default Button;
