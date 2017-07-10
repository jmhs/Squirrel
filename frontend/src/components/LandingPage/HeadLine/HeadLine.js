import React, {PropTypes} from 'react';

import './HeadLine.css';
export default class HeadLine extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row headlineWrapper">
        <div className="col-md-5 col-md-offset-1">
          <h2 className="headline">
            We take your<br/> chatting to the next level.
          </h2>
          <p className="subHeading">You open peek, welcoming content is people who are live now at specific locations. You go “Wow”. You’ve been waiting for this for years. You little stalker.</p>
        </div>
      </div>
    );
  }
}

HeadLine.propTypes = {
};
