import React, {PropTypes} from 'react';
import './Text.css'

export default class Text extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Message: "Firre"
    }
  }
  // componentDidMount(//This Wil be where we initalise socket)
  //     socket.on // receive ansd setstate


  render() {
    return (
      <div className='TextWrapper'>{this.state.Message}</div>
    );
  }
}

Text.propTypes = {
};
