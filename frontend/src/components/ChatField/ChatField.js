import React, {PropTypes} from 'react';
import TextBox from './TextBox/TextBox'

export default class ChatField extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      MyComponent
      <TextBox/>
      </div>
    );
  }
}

ChatField.propTypes = {
};
