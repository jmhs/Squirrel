import React, {PropTypes} from 'react';

import './Section9.css'

export default class Section9 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="contact" >
        <div className="row contactBG">
          <div className="col-md-2 col-md-offset-1 contactForm">
            <input type="text" className="form-control" id="contactName" placeholder="Name" />
          </div>
          <div className="col-md-2 contactForm">
            <input type="email" className="form-control" id="contactEmail" placeholder="Email" />
          </div>
          <div className="col-md-4 contactForm contactMSG">
            <input type="text" className="form-control" id="contactMSG" placeholder="Message" />
          </div>
          <div className="col-md-2 contactForm">
            <button type="button" class="btn btn-info" id="contactBtn">Send</button>
          </div>
        </div>
      </div>
    );
  }
}

Section9.propTypes = {
};
