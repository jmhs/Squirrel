import {getMessages, sendMessages} from '../../../Actions/Chat';
import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
const io = require('socket.io-client/dist/socket.io.js');


class ChatMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      IncomingHandle:'',
      IncomingMessage:''
  }
}

  componentDidMount() {
    this.props.getMessages()
  }

  render(){
    console.log(this.props.chat)
    let renderMessages = (messages) => {
        if (messages) {
          // console.log('no. of ', messages)
        {return messages.map((message, index) => {
            return(
              <p>
                  <strong>
                  {message.handle + ": " }
                  </strong>
                  {message.message}
              </p>
            )
        })}
      } else {
        return (
          <div>There are no messages yet</div>
        )
      }
    }
    const messages = renderMessages(this.props.chat)
    return (
      <div>
      {messages}
      </div>
    );
  }
}

///map state to props

ChatMessages.propTypes = {
  handle: React.PropTypes.String
};

const mapStateToProps = (state) => {
    return {
    chat : state.chat

    }

}

const mapDispatchToProps = (dispatch) => {
  return {
    getMessages : () => dispatch(getMessages())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatMessages);
