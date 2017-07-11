import React, {PropTypes} from 'react';
import ChatMessages from './ChatMessages/ChatMessages';
const io = require('socket.io-client/dist/socket.io.js');

export default class ChatField extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   IncomingHandle:'',
    //   IncomingMessage:''
  }

// componentDidMount(){
//     let state = this.state;
//     const socket = io.connect('http://localhost:3001');
//     socket.on('receive-message', (msg) => {
//     console.log(msg)
//     state.IncomingMessage = msg.message
//     state.IncomingHandle = msg.handle
//     console.log(state)
//     this.setState(state)
//   });
// }


  render() {
    //initialise messages
    //render it

    let renderMessages = () => {
      return(<ChatMessages/>)
    }

    return (
      <div id="chat-window">
        <div id="output">{renderMessages()}</div>
        <div id="feedback"></div>
      </div>
    );
  }


}

ChatField.propTypes = {
};
