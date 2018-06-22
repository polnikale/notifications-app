import React from 'react';
import styled from 'styled-components';

import defaultSvg from './default.svg';
import phoneSvg from './phone.svg';

const PhoneWrapper = styled.div`
  background-image: url(${phoneSvg});
  object-fit: contain;
  width: 231px;
  height: 481px;
  overflow: hidden;
  padding: 20px;
`;

const Notification = styled.figure`
  width: 178px;
  min-height: 235px;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1), 0 0 20px 0 rgba(0, 0, 0, 0.02);
  margin: 122px 29px;
`;

const Heading = styled.h4`
  font-size: 10px;
  color: #000;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 8px;
  color: #9e9e9e;
`;

const NotificationImage = styled.img`
  width: 178px;
  object-fit: cover;
  opacity: 0.95;
  border-radius: 10px 10px 0 0;
`;

const NotificationText = styled.figcaption`
  box-sizing: border-box;
  text-align: center;
  padding: 10px;
`;

class Phone extends React.Component {
  renderText(text) {
    return text.length <= 104 ? text : text.substr(0, 104).concat('...');
  }

  render() {
    const { heading, description, pictures } = this.props.currentNotification;

    const pictureToDisplay = pictures[0] || defaultSvg;
    const newDescription = this.renderText(description);

    return (
      <PhoneWrapper>
        <Notification className="notification">
          <NotificationImage 
            src={pictureToDisplay} 
            alt={pictureToDisplay} 
          />
          <NotificationText>
            <Heading>{heading}</Heading>
            <Description>{newDescription}</Description>
          </NotificationText>
        </Notification>
      </PhoneWrapper>
    )
  }
}

export default Phone;