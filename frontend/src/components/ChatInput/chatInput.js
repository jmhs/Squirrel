import React, {PropTypes} from 'react';
import TextInput from './components/TextInput/textInput';
import SendText from './components/SendText/sendText';

export default class ChatInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <TextInput />
      <SendText />
      </div>
    );
  }
}

ChatInput.propTypes = {
};
