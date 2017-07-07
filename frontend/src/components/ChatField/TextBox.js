import React, {PropTypes} from 'react';
import Text from './Text';

export default class TextBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      TextBox
      <Text/>
      </div>
    );
  }
}

TextBox.propTypes = {
};
