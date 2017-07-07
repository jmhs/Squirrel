import React, {PropTypes} from 'react';

export default class ChatInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row" id="textInput">
        <div className="col-lg-6">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Input text message!" />

          </div>
        </div>
      </div>
    );
  }
}

ChatInput.propTypes = {
};
// 
// <span className="input-group-btn">
//   <button className="btn btn-default" type="button">SUBMIT</button>
// </span>
