import React, {PropTypes} from 'react';

import './Section8.css';

export default class Section8 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="container-fluid freetryBG">
          <div className="row">
            <div className="col-md-12">
              <h2 className="freeTryHeader">Try Out Squirrel Today!</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <p className="freeTryWord">A little. We hate racists. We hate homophobics. We hate xenophobics. We hate sexists. We hate all kinds of extremist views. We know you’re not one of above, so don’t try to be one in your posts. So just sign up and use Squirrel!</p>
            </div>
          </div>
          <div className="row">
            <a href="/signup" className="btn btn-info GetStartedBtn">GET STARTED!</a>
          </div>
        </div>
      </div>
    );
  }
}

Section8.propTypes = {
};
