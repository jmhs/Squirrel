import React, {PropTypes} from 'react';

import './Section2.css';

export default class Section2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row" id="sponsor">
        <div className="col-md-3 snapC">
          <i className="fa fa-3x fa-snapchat-ghost sponsorIcon"><span className="sponsorName">snapchat</span></i>
        </div>
        <div className="col-md-2">
          <i className="fa fa-3x fa-skype sponsorIcon"><span className="sponsorName">skype</span></i>
        </div>
        <div className="col-md-2">
          <i className="fa fa-3x fa-twitch sponsorIcon"><span className="sponsorName">twitch</span></i>
        </div>
        <div className="col-md-2">
          <i className="fa fa-3x fa-weixin sponsorIcon"><span className="sponsorName">weixin</span></i>
        </div>
        <div className="col-md-2">
          <i className="fa fa-3x fa-whatsapp sponsorIcon"><span className="sponsorName">Whatsapp</span></i>
        </div>
      </div>

    );
  }
}

Section2.propTypes = {
};
