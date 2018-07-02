import React from 'react';
import PropTypes from 'prop-types';

import defaultSvg from './default.svg';
import './Phone.css';

function Phone(props) {
  const { currentNotification } = props;
  const { heading, pictures, description } = currentNotification;

  const pictureToDisplay = pictures[0] || defaultSvg;

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
            {description}
          </p>
        </figcaption>
      </figure>
    </div>
  );
}

Phone.propTypes = {
  currentNotification: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    pictures: PropTypes.arrayOf(PropTypes.string),
  }),
};

Phone.defaultProps = {
  currentNotification: {
    heading: '',
    description: '',
    pictures: [],
  },
};

export default Phone;
