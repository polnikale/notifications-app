import React from 'react';
import styled from 'styled-components';

import leftArrow from './leftArrow.svg';

const HeaderWrapper = styled.header`
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding-right: 10px;
  align-items: center;
  border-right: 2px solid rgba(40,44,55, .1);

  &:after {
    position: absolute;
    content: '';
    height: 2px;
    width: 100%;
    opacity: 0.1;
    top: 80px;
    left: 0;
    background-color: #333333;
  }
`;

const Heading = styled.h2`
  margin-left: 20px;
  display: inline-block;
  font-weight: bold;
`;

const BackButton = styled.button`
  height: 100%;
  cursor: pointer;
  width: 73px;
  opacity: 0.5;
  background-color: #ffffff;
  border: none;
`;

const LeftSide = styled.div`
  height: 100%;
`;

class Header extends React.Component {
  renderControls() {
    const { onBack } = this.props;

    return onBack && 
    <BackButton onClick={onBack} >
      <img src={leftArrow} alt="back" />
    </BackButton>
  }

  render() {
    const { title, children } = this.props;

    const backButton = this.renderControls();

    return (
      <HeaderWrapper>
        <LeftSide>
          {backButton}
          <Heading>{title}</Heading>
        </LeftSide>
        {children}
      </HeaderWrapper>
    );
  }
}

export default Header;