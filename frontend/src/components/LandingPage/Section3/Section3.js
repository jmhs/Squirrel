import React, {PropTypes} from 'react';

import "./Section3.css";

export default class Section extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row Section3" id="features">
        <h2 className="h2Word">Explore amazing features</h2>
        <div className="col-md-6 col-md-offset-3">
          <p className="pWord">Easy Sherlock. You can only go live from exactly where you are. Does that make any sense? Hopefully. You can’t do Instagram tricks like tagging yourself at a specific location to increase visibility. That’s naughty.</p>
        </div>
      </div>
    );
  }
}

Section.propTypes = {
};
