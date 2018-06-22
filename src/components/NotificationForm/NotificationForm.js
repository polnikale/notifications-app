import React from 'react';
import styled from 'styled-components';

import strings from '../../strings';
import defaultSvg from './default.svg';
import rubbishSvg from './rubbish.svg';
import plusSvg from './plus.svg';

const NewNotification = styled.div`
  text-align: center;
  padding: 22px;
  border-radius: 4px;
  background-color: #ffffff;
  border: solid 1px rgba(106, 117, 131, 0.16);
`;

const InputHeading = styled.h4`
  font-size: 14px;
  margin: 11.5px 0;
  text-align: center;
  color: #afafaf;
`;

const NotificationInput = styled.input`
  width: 420px;
  border-radius: 10px;
  background-color: rgba(240, 0, 71, 0);
  border: solid 1px #d7d7d7;
  padding: 11px 15px;
  color: #000000;
  outline: none;
  text-align: center;
  font-size: 16px;

  &:focus {
    border-color: rgba(170,171,255, .3);
  }
`;

const NotificationTextarea = styled.textarea`
  width: 420px;
  border-radius: 10px;
  background-color: rgba(240, 0, 71, 0);
  border: solid 1px #d7d7d7;
  padding: 11px 15px;
  color: #000000;
  outline: none; 
  resize: none;
  position: relative;
  font-size: 11.5px;
  line-height: 1.57;
  margin-bottom: 22px;

  &:focus {
    border-color: rgba(170,171,255, .3);
  }
`;

const Photos = styled.ul`
  position: relative;
  display: flex;
  margin: 0;
  padding: 0;

  &:focus {
    position: absolute;
    content: '';
    background-color: #282c37;
    height: 1px;
    width: 100%;
    top: -16px;
    left: 0;
    opacity: 0.1;
  }
`;

const ListItem = styled.li`
  list-style-type: none;
  width: 80px;
  height: 80px;
  position: relative;
  border-radius: 5px;
  margin: 10px;

  &:last-child {
    background-color: #ffffff;
    border: solid 1px rgba(106, 117, 131, 0.16);
  }
`;

const ListImage = styled.img`
  height: 80px;
  width: 80px;
  object-fit: cover;
  opacity: 0.95;
  border-radius: 5px;

  &.default-svg {
    height: auto;
    width: auto;
    object-fit: contain;
    position: relative;
    top: 50%;
    transform: translateY(-50%); 
  }
`;

const RubbishSpan = styled.span`
  width: 23px;
  height: 23px;
  right: -11.5px;
  top: -11.5px;
  background-image: url(${rubbishSvg});
  z-index: 10;
  padding: 0;
  object-fit: contain;
  position: absolute;
  cursor: pointer;
`;

const PlusLabel = styled.label`
  z-index: 10;
  background-image: url(${plusSvg});
  width: 22px;
  height: 22px;
  padding: 0;
  object-fit: contain;
  position: absolute;
  right: -11px;
  top: -11px;
  cursor: pointer;
`;

const FileInput = styled.input`
  display: none;
`;

class NotificationForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddPhoto = this.handleAddPhoto.bind(this);
  }

  renderPhotos(pictures) {
    return (
      <Photos>
        {pictures.map((picture, index) => {
          return this.renderUserPhoto(picture, index)
        })}
        {this.renderDefaultPhoto()}
      </Photos>
    )
  }

  handleAddPhoto(event) {
    const { onAddPhoto } = this.props;

    const photo = event.target.files[0];
    if (!photo) return;
    const pictureSource = window.URL.createObjectURL(photo);
    const photoSourceDotArr = photo.name.split('.');
    const photoSourceExt = photoSourceDotArr[photoSourceDotArr.length - 1];
    if (!SUPPORTED_IMAGE_FORMATS.includes(photoSourceExt)) return;
    onAddPhoto(pictureSource);
  }

  renderUserPhoto(picture) {
    const { onRemovePhoto } = this.props;

    return (
      <ListItem key={picture}>
        <ListImage 
          src={picture} 
          alt={picture} 
        />
        <RubbishSpan 
          className="rubbish-svg" 
          onClick={() => onRemovePhoto(picture)}
        />
      </ListItem>
    )
  }
  renderDefaultPhoto() {
    return (
      <ListItem>
        <ListImage 
          src={defaultSvg} 
          className="default-svg" 
          alt="default"
        />
        <PlusLabel 
          alt="add new svg" 
          htmlFor="newImage" 
          className="plus-svg"
        />
        <FileInput 
          type="file" 
          id="newImage" 
          accept="image/x-png,image/gif,image/jpeg" 
          onChange={this.handleAddPhoto}
        />
      </ListItem>
    )
  }
  render() {
    const { currentNotification, onInputChange } = this.props;
    
    const { heading, description, pictures } = currentNotification;

    const photos = this.renderPhotos(pictures);
    return (
      <NewNotification>
        <InputHeading>{strings.notificationForm.heading}</InputHeading>
        <NotificationInput 
          type="text" 
          name="heading" 
          value={heading} 
          onChange={onInputChange} 
        />
        <InputHeading>{strings.notificationForm.description}</InputHeading>
        <NotificationTextarea 
          type="text" 
          rows="6" 
          name="description" 
          value={description} 
          onChange={onInputChange} 
        />
        <InputHeading className="photos">{strings.notificationForm.pictures}</InputHeading>
          {photos}
      </NewNotification>
    )
  }
}

const SUPPORTED_IMAGE_FORMATS = ['jpg', 'JPG', 'jpeg', 'JPEG', 'bmp', 'BMP', 'gif', 'GIF', 'svg', 'SVG', 'tiff', 'TIFF', 'png', 'PNG'];

export default NotificationForm;