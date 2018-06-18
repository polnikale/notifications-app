import React from 'react';
import defaultSvg from './default.svg';
import './NotificationForm.css';

function NotificationForm(props) {
  const { heading, description, pictures } = props;
  const photos = renderPhotos(pictures);
  function renderPhotos(pictures) {
    return (
      <ul className="photos">
        {pictures.map((picture, index) => {
          return renderUserPhoto(picture, index)
        })}
        {renderDefaultPhoto()}
      </ul>
    )
  }

  function handleAddPhoto(event) {
    const photo = event.target.files[0];
    const pictureSrc = window.URL.createObjectURL(photo);
    const photoSrcDotArr = photo.name.split('.');
    const photoSrcExt = photoSrcDotArr[photoSrcDotArr.length - 1];
    if (!SUPPORTED_IMAGE_FORMATS.includes(photoSrcExt)) return;
    props.onAddPhoto(pictureSrc);
  }

  function renderUserPhoto(picture, index) {
    return (
      <li key={picture}>
        <img 
          src={picture} 
          alt={picture} 
        />
        <span 
          className="rubbish-svg" 
          onClick={() => props.onRemovePhoto(picture)}
        />
      </li>
    )
  }
  function renderDefaultPhoto() {
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
          onChange={handleAddPhoto}
        />
      </li>
    )
  }
  return (
    <div className="new-notification">
      {props.heading}
      <h4>Заголовок</h4>
      <input 
        type="text" 
        name="heading" 
        value={heading} 
        onInput={props.onInputChange} 
      />
      <h4>Описание</h4>
      <textarea 
        type="text" 
        rows="6" 
        name="description" 
        value={description} 
        onInput={props.onInputChange} 
      />
      <h4 className="photos">Фотографии</h4>
        {photos}
    </div>
  )
}

const SUPPORTED_IMAGE_FORMATS = ['jpg', 'JPG', 'jpeg', 'JPEG', 'bmp', 'BMP', 'gif', 'GIF', 'svg', 'SVG', 'tiff', 'TIFF', 'png', 'PNG'];

export default NotificationForm;