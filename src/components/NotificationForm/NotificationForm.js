import React from 'react';
import PropTypes from 'prop-types';

import strings from '../../strings';
import defaultSvg from './default.svg';
import './NotificationForm.css';

const SUPPORTED_IMAGE_FORMATS = ['jpg', 'JPG', 'jpeg', 'JPEG', 'bmp', 'BMP', 'gif', 'GIF', 'svg', 'SVG', 'tiff', 'TIFF', 'png', 'PNG'];

class NotificationForm extends React.Component {
  static handlePress(event, handler, ...args) {
    if (event.key === 'Enter') {
      handler(...args);
    }
  }

  static handleDragOver(event) {
    event.preventDefault();
  }

  static propTypes = {
    onAddPhoto: PropTypes.func.isRequired,
    onRemovePhoto: PropTypes.func.isRequired,
    onInputChange: PropTypes.func.isRequired,
    currentNotification: PropTypes.shape({
      heading: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      pictures: PropTypes.arrayOf(PropTypes.string),
    }),
  }

  static defaultProps = {
    currentNotification: {
      heading: '',
      description: '',
      pictures: [],
    },
  }

  constructor(props) {
    super(props);

    this.handleAddPhoto = this.handleAddPhoto.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
  }

  addPhoto(photo) {
    const { onAddPhoto } = this.props;

    if (!photo) return;
    const pictureSource = window.URL.createObjectURL(photo);
    const photoSourceDotArr = photo.name.split('.');
    const photoSourceExt = photoSourceDotArr[photoSourceDotArr.length - 1];
    if (!SUPPORTED_IMAGE_FORMATS.includes(photoSourceExt)) return;
    onAddPhoto(pictureSource);
  }

  handleAddPhoto(event) {
    const photo = event.target.files[0];

    this.addPhoto(photo);
  }

  handleDrop(event) {
    event.preventDefault();
    this.addPhoto(event.dataTransfer.files[0]);
  }

  renderPhotos(pictures) {
    return (
      <ul className="photos">
        {pictures.map((picture, index) => this.renderUserPhoto(picture, index))}
        {this.renderDefaultPhoto()}
      </ul>
    );
  }

  renderUserPhoto(picture) {
    const { onRemovePhoto } = this.props;

    return (
      <li key={picture}>
        <img
          src={picture}
          alt={picture}
        />
        <span
          className="rubbish-svg"
          role="button"
          tabIndex="0"
          onClick={() => onRemovePhoto(picture)}
          onKeyPress={event => this.constructor.handlePress(event, onRemovePhoto, picture)}
        />
      </li>
    );
  }

  renderDefaultPhoto() {
    return (
      <li
        onDrop={this.handleDrop}
        onDragOver={this.constructor.handleDragOver}
      >
        <img
          src={defaultSvg}
          className="default-svg"
          alt="default"
        />
        <label
          alt="add new svg"
          htmlFor="newImage"
          className="plus-svg"
        >
          <input
            type="file"
            id="newImage"
            accept="image/x-png,image/gif,image/jpeg"
            onChange={this.handleAddPhoto}
          />
        </label>
      </li>
    );
  }

  render() {
    const { currentNotification, onInputChange } = this.props;

    const { heading, description, pictures } = currentNotification;

    const photos = this.renderPhotos(pictures);
    return (
      <div className="new-notification">
        <h4>
          {strings.notificationForm.heading}
        </h4>
        <input
          type="text"
          name="heading"
          value={heading}
          onChange={onInputChange}
        />
        <h4>
          {strings.notificationForm.description}
        </h4>
        <textarea
          type="text"
          rows="6"
          name="description"
          value={description}
          onChange={onInputChange}
        />
        <h4 className="photos">
          {strings.notificationForm.pictures}
        </h4>
        {photos}
      </div>
    );
  }
}

export default NotificationForm;
