import React, {PropTypes} from 'react';
import ChatMessages from './ChatMessages/ChatMessages';
const io = require('socket.io-client/dist/socket.io.js');

export default class ChatField extends React.Component {
  constructor(props) {
    super(props);

  }



  render() {
    //initialise messages
    //render it
    let renderMessages = () => {
      return(<ChatMessages/>)
    }

    return (
      <div id="chat-window">
        <div id="output"><ChatMessages/></div>
        <div id="feedback"></div>
      </div>
    );
  }


}

ChatField.propTypes = {
};
