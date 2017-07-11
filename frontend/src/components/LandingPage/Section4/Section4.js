import React, {PropTypes} from 'react';

import './Section4.css';

export default class Section4 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row Section4">
        <div className="col-md-3 col-sm-6 col-xs-6 col-xxs-12">
          <a href="/login" className="fh5co-feature to-animate">
            <span className="fh5co-feature-icon"><i className="icon-mustache" /></span>
            <h3 className="fh5co-feature-lead">100% Free</h3>
            <p className="fh5co-feature-text">Shut up and take my money, even though it is free.</p>
          </a>
        </div>
        <div>
        <div className="col-md-3 col-sm-6 col-xs-6 col-xxs-12">
          <a href="/login" className="fh5co-feature to-animate">
            <span className="fh5co-feature-icon"><i className="icon-screen-smartphone" /></span>
            <h3 className="fh5co-feature-lead">Fully Responsive</h3>
            <p className="fh5co-feature-text">Excited enough? We feel you.</p>
          </a>
        </div>
        <div className="clearfix visible-sm-block" />
          <div className="col-md-3 col-sm-6 col-xs-6 col-xxs-12">
            <a href="/login" className="fh5co-feature to-animate">
              <span className="fh5co-feature-icon"><i className="icon-eye" /></span>
              <h3 className="fh5co-feature-lead">Retina-ready</h3>
              <p className="fh5co-feature-text">Your eyes will feel so comfortable, you will cry upon using.</p>
            </a>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-6 col-xxs-12">
            <a href="/login" className="fh5co-feature to-animate">
              <span className="fh5co-feature-icon"><i className="icon-cloud-download" /></span>
              <h3 className="fh5co-feature-lead">Download</h3>
              <p className="fh5co-feature-text">Dude. We don't want your money. Just download it.</p>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

Section4.propTypes = {
};
