import React, {PropTypes} from 'react';

// import components for the landing page
import Header from './Header/Header';
import Section2 from './Section2/Section2';
import Section3 from './Section3/Section3';
import Section4 from './Section4/Section4';
import Section5 from './Section5/Section5';
import Section6 from './Section6/Section6';
import Section7 from './Section7/Section7';
import Section8 from './Section8/Section8';
import Section9 from './Section9/Section9';


export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid" id="main">
        <div className="row" id="home">
          <Header/>
        </div>
        <div className="row" >
          <Section2/>
        </div>
        <div className="row" id="features">
          <Section3/>
        </div>
        <div className="row" >
          <Section4/>
        </div>
        <div className="row" id="design">
          <Section5/>
        </div>
        <div className="row" id="team">
          <Section6/>
        </div>
        <div className="row" id="satisfaction">
          <Section7/>
        </div>
        <div className="row" id="freeTry">
          <Section8/>
        </div>
        <div className="row" id="contact">
          <Section9/>
        </div>
      </div>
    );
  }
}

LandingPage.propTypes = {
};
