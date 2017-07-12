import React, {PropTypes} from 'react';

import './Section5.css';

export default class Section5 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row Section5">
        <div className="col-md-12 designHeading">
          <h2 className="h2Word">Better design</h2>
          <div className="col-md-6 col-md-offset-3">
            <p className="pWord">Let me explain it in this way. Imagine you’re at home pregaming and trying to find out which place to go because you just broke up with your partner and want to find a crowded place to increase your chances. Maybe not.</p>
          </div>
        </div>
        <div className="col-md-4 left-text-wrap">
          <div className="row text-center">
            <div className="col-md-12 col-sm-6 col-xs-6 col-xxs-12 fh5co-text animate-object features-2-animate-3">
              <span className="fh5co-icon"><i className="icon-screen-desktop"></i></span>
              <h4 className="fh5co-uppercase-sm">Cross platform support</h4>
              <p className="pWord">It is available on App Store <br/>but we don't give a single care <br/>about Google Play Store, yet.</p>
            </div>
            <div className="col-md-12 col-sm-6 col-xs-6 col-xxs-12 fh5co-text animate-object features-2-animate-4">
              <span className="fh5co-icon"><i className="icon-anchor"></i></span>
              <h4 className="fh5co-uppercase-sm">Prototyping tools</h4>
              <p className="pWord">Hyperlocal live stream platform. <br/>so? This came from one of those <br/>accelerator programs, it’s for<br/> “Hello, I’m an entrepreneur.” <br/>dudes. Nevermind.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 image-wrap">
            <img className="imgPrototype" src="https://image.ibb.co/eJomPa/iphone_blank_3.png" alt="squirrel prototype one" />
        </div>
        <div className="col-md-4 right-text-wrap">
          <div className="row text-center">
	    			<div className="col-md-12 col-sm-6 col-xs-6 col-xxs-12 fh5co-text animate-object features-2-animate-5">
	    				<span className="fh5co-icon"><i className="icon-rocket"></i></span>
							<h4 className="fh5co-uppercase-sm">Powerful design</h4>
							<p className="pWord">You go “Wow”. You’ve been <br/>waiting for this for years. You <br/>little stalker.</p>
						</div>
						<div className="col-md-12 col-sm-6 col-xs-6 col-xxs-12 fh5co-text animate-object features-2-animate-6">
							<span className="fh5co-icon"><i className="icon-people"></i></span>
							<h4 className="fh5co-uppercase-sm">User Collaboration</h4>
							<p className="pWord">Imagine you’re at home <br/>pregaming and trying to find <br/>out which place to go because<br/> you just broke up with your <br/>partner and want to find a crowded <br/>place to increase your chances.</p>
						</div>
					</div>
        </div>
      </div>
    );
  }
}

Section5.propTypes = {
};
