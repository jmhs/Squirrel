import React, {PropTypes} from 'react';

export default class ChatInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <input id="handle" type="text" placeholder="Handle"/>
      <input id="message" type="text" placeholder="Message"/>
      <button id="send">Send</button>
      </div>
    );
  }
}

ChatInput.propTypes = {
};
