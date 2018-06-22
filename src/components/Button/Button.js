import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  border-radius: 4px;
  font-size: 13px;
  cursor: pointer;
  outline: none;
  border: none;
  box-sizing: border-box;
  height: 34.5px;

  &.new-button, &.save-button.disabled  {
    background-color: #ffffff;
    opacity: 0.8;
    color: #6c6c6c;
    border: solid 1px rgba(0, 0, 0, 0.1);
  }

  &.new-button {
    display: flex;
    align-items: center;
    width: 113px;

    span {
      margin-left: 7px;
    }
  }

  &.save-button {
    width: 140px;
    background-color: #ff0047;
    color: #ffffff;
  }
`;

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
      <ButtonWrapper 
        className={classes} 
        onClick={this.handleClick}
      >
        {children}
      </ButtonWrapper>
    )
  }
}

export default Button;