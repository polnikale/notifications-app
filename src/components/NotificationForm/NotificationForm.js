import React from 'react';
import defaultSvg from './default.svg';
import './NotificationForm.css';

class NotificationForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddPhoto = this.handleAddPhoto.bind(this);
  }

  renderPhotos(pictures) {
    return (
      <ul className="photos">
        {pictures.map((picture, index) => {
          return this.renderUserPhoto(picture, index)
        })}
        {this.renderDefaultPhoto()}
      </ul>
    )
  }

  handleAddPhoto(event) {
    const { onAddPhoto } = this.props;

    const photo = event.target.files[0];
    if (!photo) return;
    const pictureSrc = window.URL.createObjectURL(photo);
    const photoSrcDotArr = photo.name.split('.');
    const photoSrcExt = photoSrcDotArr[photoSrcDotArr.length - 1];
    if (!SUPPORTED_IMAGE_FORMATS.includes(photoSrcExt)) return;
    onAddPhoto(pictureSrc);
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
          onClick={() => onRemovePhoto(picture)}
        />
      </li>
    )
  }
  renderDefaultPhoto() {
    return (
      <li>
        <img 
          src={defaultSvg} 
          className="default-svg" 
          alt="defaultimg"
        />
        <label 
          alt="add new svg" 
          htmlFor="newImg" 
          className="plus-svg"
        />
        <input 
          type="file" 
          id="newImg" 
          accept="image/x-png,image/gif,image/jpeg" 
          onChange={this.handleAddPhoto}
        />
      </li>
    )
  }
  render() {
    const { heading, description, pictures, onInputChange } = this.props;
    const photos = this.renderPhotos(pictures);
    return (
      <div className="new-notification">
        <h4>Заголовок</h4>
        <input 
          type="text" 
          name="heading" 
          value={heading} 
          onChange={onInputChange} 
        />
        <h4>Описание</h4>
        <textarea 
          type="text" 
          rows="6" 
          name="description" 
          value={description} 
          onChange={onInputChange} 
        />
        <h4 className="photos">Фотографии</h4>
          {photos}
      </div>
    )
  }
}

const SUPPORTED_IMAGE_FORMATS = ['jpg', 'JPG', 'jpeg', 'JPEG', 'bmp', 'BMP', 'gif', 'GIF', 'svg', 'SVG', 'tiff', 'TIFF', 'png', 'PNG'];

export default NotificationForm;