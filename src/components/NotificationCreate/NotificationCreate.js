import React from 'react';
import './NotificationCreate.css';
import defaultSvg from './default.svg';


class NotificationCreate extends React.Component {
  constructor(props) {
    super(props);

    this.handleInput = this.handleInput.bind(this);
    this.handleAddPhoto = this.handleAddPhoto.bind(this);
    this.removePicture = this.removePicture.bind(this);
    this.supportedImgFormat = ['jpg', 'JPG', 'png' ,'PNG' ,'jpeg' ,'JPEG', 'svg', 'SVG']; 

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
    let input = event.target; // обрабатываю и textarea, и input
    let stateName = input.getAttribute('name');
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
    if(!(this.supportedImgFormat.includes(photoSrcExt))) return; //решил сделать еще и тут проверку на тип файла. На всякий
    this.setState((prevState) => {
      return {pictures: [...prevState.pictures, url]};
    });
  }

  removePicture(event) { // вместо event я передаю просто индекс
    this.setState((prevState) => {
      let prevPictures = [...prevState.pictures];
      prevPictures.splice(event, 1);
      return {pictures: prevPictures};
    })
  }
  render() {
    let photos = (
      <ul className="photos">
        {this.state.pictures.map((picture, index) => 
          <li key={picture}> 
          {/* тут подразумевается, что не будет одинаковых картинок. Собственно, при добавлении фото уже есть такая проверка. Ибо тогда key рушится */}
            <img src={picture} alt={picture} />
            <span className="rubbish-svg" onClick={this.removePicture.bind(this, index)}/>
          </li>
        )}
        <li>
          <img src={defaultSvg} className="default-svg" alt="defaultimg"/>
          <label alt="add new svg" htmlFor="newImg" className="plus-svg"/>
          <input type="file" id="newImg" accept="image/x-png,image/gif,image/jpeg" onChange={this.handleAddPhoto}/>
        </li>
      </ul>
    )
    return(
      <div className="notifCreate-wrapper">
        <div className="phone" >sasas</div>
        <div className="new-notification">
          <h4>Заголовок</h4>
          <input type="text" name="heading" value={this.state.heading} onInput={this.handleInput} />
          <h4>Описание</h4>
          <textarea type="text" rows="6" name="description" value={this.state.description} onInput={this.handleInput} />
          <h4 className="photos">Фотографии</h4>
          {photos}
        </div>
      </div>
    )
  }
}

export default NotificationCreate;