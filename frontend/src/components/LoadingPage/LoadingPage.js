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
        <h1>Foraging berries...</h1>
          <ReactLoading type="cylon"
                        id="loadingImage"
                        color={444}>
          </ReactLoading>
      </div>
    );
  }
}

LoadingPage.propTypes = {};
