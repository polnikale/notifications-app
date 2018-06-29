import React from 'react';

import defaultSvg from './default.svg';
import './Phone.css';

class Phone extends React.Component {
  renderText() {
    const { currentNotification } = this.props;
    const { description } = currentNotification;

    return description.length <= 104 ? description : description.substr(0, 104).concat('...');
  }

  render() {
    const { currentNotification } = this.props;
    const { heading, pictures } = currentNotification;

    const pictureToDisplay = pictures[0] || defaultSvg;
    const newDescription = this.renderText();

    return (
      <div className="phone">
        <figure className="notification">
          <img
            src={pictureToDisplay}
            alt={pictureToDisplay}
          />
          <figcaption>
            <h4>
              {heading}
            </h4>
            <p>
              {newDescription}
            </p>
          </figcaption>
        </figure>
      </div>
    );
  }
}

export default Phone;
