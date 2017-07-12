import React, {PropTypes} from 'react';
import Logo from '../Logo/Logo';
import HeadLine from '../HeadLine/HeadLine';

import "./Section1.css";

export default class Section1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Logo/>
          <HeadLine/>
          <div className="row">
            <div className="videoLoop">
              <video autoPlay loop muted id="video-background">
                <source type="video/mp4" src="//player.vimeo.com/external/135479002.hd.mp4?s=11d941f380461d5a81ad920465c5465f"/>
              </video>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Section1.propTypes = {
};
