import {postMessages, sendMessages } from '../../Actions/Chat';
import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
const io = require('socket.io-client/dist/socket.io.js');



class ChatInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      handle:'',
      message:''
    }
  }
  componentDidMount(){
      const socket = io.connect('http://localhost:3001');
      // Query DOM
      const message = document.getElementById('message'),
            handle = document.getElementById('handle'),
            btn = document.getElementById('send'),


            output = document.getElementById('output'),
            feedback = document.getElementById('feedback');

      message.addEventListener('keypress', () => {
        socket.emit("typing", this.state.handle);
      });

      socket.on('typing', (data) => {
        feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
      });


  }
  onChange = (e) => {
      let state = this.state;

      if(e.target.id == "handle") {
        state.handle = e.target.value;
      }

      if(e.target.id == "message") {
        state.message= e.target.value;
      }
      this.setState(state)

  }

  onClick = (e) => {
  let state = this.state;
  const message = {
      message: this.state.message,
      handle: this.state.handle
    }
  console.log(message)
  //sendMessages(message)
  this.props.fireoff(message)
    //});
    this.state.message = "";
    this.setState(state)
  }

  enterKeyPress = (e) => {
    console.log("pressed Enter");
    if(e.charCode==13){
      let state = this.state;
      const message = {
          message: this.state.message,
          handle: this.state.handle
        }
      console.log(message)
      //sendMessages(message)
      this.props.fireoff(message)
        //});
        this.state.message = "";
        this.setState(state)
    }
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
              onChange={this.onChange}
              onKeyPress={this.enterKeyPress}/>

      <button id="send" onClick={this.onClick}>Send</button>
      </div>
    );
  }
}

ChatInput.propTypes = {
};


const mapStateToProps = (ChatReducer) => {
    return {
    message : ChatReducer.message,
    handle : ChatReducer.handle
    }

}

const mapDispatchToProps = (dispatch) => {
  return {
    fireoff : (message) => dispatch(sendMessages(message))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatInput);
