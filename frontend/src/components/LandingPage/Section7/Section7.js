import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import AnimationCount from 'react-count-animation';

import './Section7.css';

export default class Section7 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

      const settings = {
        start: 0,
        count: 9999,
        duration: 9000000,
        decimals: 0,
        useGroup: true,
        animation: 'up',
      };
      const settings2 = {
        start: 0,
        count: 999999,
        duration: 9000000,
        decimals: 0,
        useGroup: true,
        animation: 'up',
      };
      const settings3 = {
        start: 0,
        count: 99999,
        duration: 9000000,
        decimals: 0,
        useGroup: true,
        animation: 'up',
      };

    return (
      <div>
        <div className="row SatisfactionBG">
          <div className="col-md-4 SatisfactionWord">
            <AnimationCount {...settings}/>
            <p className="describtionSW">CUSTOMERS</p>
          </div>
          <div className="col-md-4 SatisfactionWord">
            <AnimationCount {...settings2}/>
            <p className="describtionSW">CHATS PER DAY</p>
          </div>
          <div className="col-md-4 SatisfactionWord">
            <AnimationCount {...settings3}/>
            <p className="describtionSW">DOWNLOADS</p>
          </div>
        </div>
      </div>
    );
  }
}
