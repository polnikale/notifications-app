import React from 'react';
import './NotificationCreate.css';
import defaultSvg from './default.svg';
import Phone from '../Phone/Phone';


class NotificationCreate extends React.Component {
  constructor(props) {
    super(props);

    this.handleInput = this.handleInput.bind(this);
    this.handleAddPhoto = this.handleAddPhoto.bind(this);

    if (props.info) {
      this.state = {
        heading: props.info.heading,
        description: props.info.description,
        pictures: props.info.pictures,
      };
    } else {
      this.state = {
        heading: '',
        description: '',
        pictures: [],
      };
    }
  }

  handleInput(event) {
    const input = event.target; // обрабатываю и textarea, и input
    const stateName = input.getAttribute('name');
    this.setState({
      [stateName]: input.value
    });
  }

  handleAddPhoto(event) {
    event.preventDefault();
    const photo = event.target.files[0];
    const url = window.URL.createObjectURL(photo);
    const photoSrcDotArr = photo.name.split('.');
    const photoSrcExt = photoSrcDotArr[photoSrcDotArr.length - 1];
    if(!(supportedImgFormat.includes(photoSrcExt))) return; //решил сделать еще и тут проверку на тип файла. На всякий
    this.setState((prevState) => {
      return {pictures: [...prevState.pictures, url]};
    });
  }

  handleRemovePhoto(pictureSrc) { 
    this.setState((prevState) => {
      const prevPictures = prevState.pictures.filter((picture) => {
        return !(picture === pictureSrc);
      });
      return {pictures: prevPictures};
    })
  }

  renderPhotos(pictures) {
    return (
      <ul className="photos">
        {pictures.map((picture, index) => {
          return this.renderUserPhoto(picture)
        })}
        {this.renderDefaultPhoto()}
      </ul>
    )
  }

  renderUserPhoto(picture) {
    return (
      <li key={picture}>
        <img 
          src={picture} 
          alt={picture} 
        />
        <span 
          className="rubbish-svg" 
          onClick={this.handleRemovePhoto.bind(this, picture)}
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
    const { pictures, heading, description } = this.state;

    let photos = this.renderPhotos(pictures);
    return(
      <div className="notifCreate-wrapper">
        <Phone 
          picture={pictures[0]} 
          heading={heading}
          description={description} 
        />
        <div className="new-notification">
          <h4>Заголовок</h4>
          <input 
            type="text" 
            name="heading" 
            value={this.state.heading} 
            onInput={this.handleInput} 
          />
          <h4>Описание</h4>
          <textarea 
            type="text" 
            rows="6" 
            name="description" 
            value={this.state.description} 
            onInput={this.handleInput} 
          />
          <h4 className="photos">Фотографии</h4>
          {photos}
        </div>
      </div>
    )
  }
}

const supportedImgFormat = ['jpg', 'JPG', 'png' ,'PNG' ,'jpeg' ,'JPEG', 'svg', 'SVG']; 

export default NotificationCreate;