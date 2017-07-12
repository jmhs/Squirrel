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

  const message = {
      message: this.state.message,
      handle: this.state.handle
    }
  console.log(message)
  //sendMessages(message)
  this.props.fireoff(message)
    //});
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
