import React, {PropTypes} from 'react';
import SendText from '../SendText/SendText';

// Import CSS style
import './TextInput.css'

// TextareaAutosize is a react package that allows the text area to autosize based on user input.
// Minimum height of text box --> rows:{numberofrows desired for minimum height}
// Max height of text box --> maxRows:{numberofrows desired for max height}

// We can force TextareaAutosize to have a height of a minimum number of rows by passing the prop rows:{numberofrows} --> refer to line 25
import TextareaAutosize from 'react-textarea-autosize';

export default class ChatInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row TextInput">
          <div>
            <TextareaAutosize className="textareaStyle" rows={1.5} maxRows={2} placeholder='Enter your message here...'/>
          </div>
        </div>
      </div>
    );
  }
}

ChatInput.propTypes = {};
