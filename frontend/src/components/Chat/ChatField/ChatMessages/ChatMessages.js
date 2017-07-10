import React, {PropTypes} from 'react';
const io = require('socket.io-client/dist/socket.io.js');

export default class ChatMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      IncomingHandle:'',
      IncomingMessage:''
  }
}
  componentDidMount(){

      let state = this.state;
      const socket = io.connect('http://localhost:3001');
      socket.on('receive-message', (msg) => {
      console.log(msg)
      state.IncomingMessage = msg.message
      state.IncomingHandle = msg.handle
      console.log(state)
      this.setState(state)
      let renderMessages = () => {
        return(
 
          <p>
              <strong>
              {this.state.IncomingHandle}
              </strong>
              {this.state.IncomingMessage}
          </p>
        )
      }
      renderMessages()
    });
  }


  render() {

    return (
      <div>
      </div>
    );
  }
}

ChatMessages.propTypes = {
};
