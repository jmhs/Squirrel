import React, {PropTypes} from 'react';

import './Logo.css';
export default class Logo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="filler">
        <a href="/login" className="navBrand">
          <span className="logoBrand">SQUIRREL</span>
        </a>
      </div>
    );
  }
}

Logo.propTypes = {
};
