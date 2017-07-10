import React, {PropTypes} from 'react';

export default class ChatField extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="chat-window">
        <div id="output"></div>
        <div id="feedback"></div>
      </div>
    );
  }
}

ChatField.propTypes = {
};
