import React, {PropTypes} from 'react';
import TextInput from './TextInput/TextInput';
import SendText from './SendText/SendText';

// Import component CSS
import './ChatInput.css'

export default class ChatInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row ChatInput">
          <TextInput/>
          <SendText/>
        </div>
      </div>
    );
  }
}

ChatInput.propTypes = {};
