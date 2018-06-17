import React from 'react';
import defaultSvg from './default.svg';
import './Phone.css';

function Phone(props) {
  const { heading, description, picture } = props.notifInfo;
  const pictureToDisplay = picture || defaultSvg;
  return (
    <div className="phone">
      <figure className="notification">
        <img 
          src={pictureToDisplay} 
          alt={picture} 
        />
        <figcaption>
          <h4>{heading}</h4>
          <p>{description}</p>
        </figcaption>
      </figure>
    </div>
  )
}

export default Phone;