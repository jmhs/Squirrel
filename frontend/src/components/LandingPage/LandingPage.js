import React, {PropTypes} from 'react';

// import components for the landing page
import Header from './Header/Header';
import Section2 from './Section2/Section2';
import Section3 from './Section3/Section3';


export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Header/>
        </div>
        <div className="row">
          <Section2/>
        </div>
        <div className="row">
          <Section3/>
        </div>
      </div>
    );
  }
}

LandingPage.propTypes = {
};
