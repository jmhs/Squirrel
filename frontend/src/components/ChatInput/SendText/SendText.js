import React, {PropTypes} from 'react';

// Import component CSS
import './SendText.css';

export default class SendText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="vertical container">
        <div className="row">
          <section className="SendText pull-right">
            <button id="SendTextBtn" type="button">Submit</button>
          </section>
        </div>
      </div>
    );
  }
}

SendText.propTypes = {};

// js-trigger-overlay
