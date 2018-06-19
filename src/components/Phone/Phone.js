import React from 'react';
import defaultSvg from './default.svg';
import './Phone.css';

function Phone(props) {
  const { heading, description, picture } = props;
  const pictureToDisplay = picture || defaultSvg;
  const newDescription = renderText(description);
  function renderText(text) {
    return text.length <= 104 ? text : text.substr(0, 104).concat('...');
  }
  return (
    <div className="phone">
      <figure className="notification">
        <img 
          src={pictureToDisplay} 
          alt={picture} 
        />
        <figcaption>
          <h4>{heading}</h4>
          <p>{newDescription}</p>
        </figcaption>
      </figure>
    </div>
  )
}

export default Phone;