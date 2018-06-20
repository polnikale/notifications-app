import React from 'react';

import defaultSvg from './default.svg';
import './Phone.css';

class Phone extends React.Component {
  renderText(text) {
    return text.length <= 104 ? text : text.substr(0, 104).concat('...');
  }

  render() {
    const { heading, description, pictures } = this.props.currentNotification;

    const pictureToDisplay = pictures[0] || defaultSvg;
    const newDescription = this.renderText(description);

    return (
      <div className="phone">
        <figure className="notification">
          <img 
            src={pictureToDisplay} 
            alt={pictureToDisplay} 
          />
          <figcaption>
            <h4>{heading}</h4>
            <p>{newDescription}</p>
          </figcaption>
        </figure>
      </div>
    )
  }
}

export default Phone;