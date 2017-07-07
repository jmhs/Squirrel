import React, {PropTypes} from 'react';
import TextInput from './components/TextInput/TextInput';
import SendText from './components/SendText/SendText';

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
