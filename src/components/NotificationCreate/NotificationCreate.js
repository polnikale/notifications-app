import React from 'react';
import './NotificationCreate.css';

class NotificationCreate extends React.Component {
  constructor(props) {
    super(props);

    this.handleInput = this.handleInput.bind(this);
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
  render() {
    return(
      <div className="notifCreate-wrapper">
        <div className="phone" >sasas</div>
        <div className="new-notification">
          <h4>Заголовок</h4>
          <input type="text" name="heading" value={this.state.heading} onInput={this.handleInput} />
          <h4>Описание</h4>
          <input type="text" name="description" value={this.state.description} onInput={this.handleInput} />
        </div>
      </div>
    )
  }
}

export default NotificationCreate;