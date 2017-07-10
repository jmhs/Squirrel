import React, {PropTypes} from 'react';

import MenuBar from '../MenuBar/MenuBar';

import Section1 from '../Section1/Section1';

import './Header.css';


export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <MenuBar/>
        <div className="col-md-12">

          <Section1/>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
};
