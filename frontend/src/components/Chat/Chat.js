import React, { Component } from 'react';
import './Chat.css';
import ChatInput from './ChatInput/ChatInput';
import ChatField from './ChatField/ChatField';
//import components
import NavBar from '../NavBar/NavBar';

const io = require('socket.io-client/dist/socket.io.js');


class Chat extends Component {

  // componentDidMount() {
  //   const socket = io.connect('http://localhost:3001');
  //   // Query DOM
  //   const message = document.getElementById('message'),
  //         handle = document.getElementById('handle'),
  //         btn = document.getElementById('send'),
  //
  //
  //         output = document.getElementById('output'),
  //         feedback = document.getElementById('feedback');
  //
  //
  //   message.addEventListener('keypress', () => {
  //     socket.emit("typing", handle.value);
  //   });
  //
  //   socket.on('typing', (data) => {
  //     feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
  //   });
  //
  // }
  componentDidMount() {
    // const socket = io.connect('http://localhost:3001');
    // socket.emit("userLongitude", 103.9);
    // socket.emit("userLatitude", 1.25);
    }

  render() {
    const self = this;
    return (
      <div className="App container-fluid">
        <div className='row'>
        <NavBar/>
        </div>
        <div className='row'>
        <div id="mario-chat">
          <ChatField/>
          <ChatInput/>
      </div>
    </div>
  </div>

    );
  }
}

export default Chat;
