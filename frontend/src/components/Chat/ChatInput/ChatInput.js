import React, {PropTypes} from 'react';
const io = require('socket.io-client/dist/socket.io.js');

export default class ChatInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      handle:'',
      message:''
    }
  }

  onChange = (e) => {
      let state = this.state;

      if(e.target.id == "handle") {
        state.handle = e.target.value;
      }

      if(e.target.id == "message") {
        state.message= e.target.value;
      }
      console.log(state)
      this.setState(state)
  }

  onClick = (e) => {
    const socket = io.connect('http://localhost:3001');
    socket.emit('new-message', {
      message: this.state.message,
      handle: this.state.handle
    });
  }


  render() {

    return (
      <div>
      <input id="handle"
            type="text"
            placeholder="Handle"
            value={this.state.handle}
            onChange={this.onChange}/>

      <input id="message"
              type="text"
              placeholder="Message"
              value={this.state.message}
              onChange={this.onChange}/>

      <button id="send" onClick={this.onClick}>Send</button>
      </div>
    );
  }
}

ChatInput.propTypes = {
};
