import React, {PropTypes} from 'react';
import Text from '../Text/Text';
import './TextBox.css'

export default class TextBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='Border'>
      <Text text= {this.props.Message}/>
      <Text text= {this.props.Message}/>
      </div>
    );
  }
}

TextBox.propTypes = {
};
