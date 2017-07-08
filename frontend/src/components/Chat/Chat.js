import React, { Component } from 'react';
import logo from './logo.svg';
import './Chat.css';
//import components
import NavBar from '../NavBar/NavBar';

const io = require('socket.io-client/dist/socket.io.js');


class Chat extends Component {

  componentDidMount() {
    const socket = io.connect('http://localhost:3001');
    // Query DOM
    const message = document.getElementById('message'),
          handle = document.getElementById('handle'),
          btn = document.getElementById('send'),
          output = document.getElementById('output'),
          feedback = document.getElementById('feedback');

    btn.addEventListener('click', ()=>{
      socket.emit('new-message', {
        message: message.value,
        handle: handle.value
      });
    });
    message.addEventListener('keypress', () => {
      socket.emit("typing", handle.value);
    });

    // listen for events
    socket.on('receive-message', (msg) => {
      output.innerHTML += '<p><strong>' + msg.handle + ': </strong>' + msg.message + '</p>';
    });
    socket.on('typing', (data) => {
      feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
    });

  }

  // submitMessage = () => {
  //   let message = document
  // }

  render() {
    const self = this;
    return (
      <div className="App container-fluid">
        <NavBar/>
        <div id="mario-chat">
          <div id="chat-window">
            <div id="output"></div>
            <div id="feedback"></div>
          </div>
          <input id="handle" type="text" placeholder="Handle"/>
          <input id="message" type="text" placeholder="Message"/>
          <button id="send">Send</button>
        </div>
      </div>
    );
  }
}

export default Chat;
