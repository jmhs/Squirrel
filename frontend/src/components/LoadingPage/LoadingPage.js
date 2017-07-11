import React, {PropTypes} from 'react';
import ReactLoading from 'react-loading';

import './LoadingPage.css'

export default class LoadingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="loadingContent">
          <h1>Hang on, our elves are working hard!</h1>
          <ReactLoading type="cylon"
                        id="loadingImage"
                        color={444}>
          </ReactLoading>
      </div>
    );
  }
}

LoadingPage.propTypes = {};
