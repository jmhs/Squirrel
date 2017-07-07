import React, {PropTypes} from 'react';
import TextInput from './TextInput/TextInput';
import SendText from './SendText/SendText';

export default class ChatInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = "row">
      <TextInput />
      <SendText />
      </div>
    );
  }
}

ChatInput.propTypes = {
};
