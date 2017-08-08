import React, {PropTypes} from 'react';
import { stack as Menu } from 'react-burger-menu';
import {Link} from 'react-router-dom';

// import css
import './MenuBar.css';

export default class MenuBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Menu>
          <Link to="/signup">
          <a>
            <i className="fa fa-fw fa-lg fa-user-plus"></i>
            <span className="menuLink">Free Sign Up!</span>
          </a></Link>
        <Link to="/login">
          <a>
            <i className="fa fa-fw fa-lg fa-sign-in"></i>
            <span className="menuLink">Login</span>
          </a></Link>
          <hr/>
          <a href="#home">
            <i className="fa fa-fw fa-home"></i>
            <span className="menuLink menuHome">Home</span>
          </a>
          <a href="#features">
            <i className="fa fa-fw fa-telegram"></i>
            <span className="menuLink menuFeatures">Features</span>
          </a>
          <a href="#design">
            <i className="fa fa-fw fa-paint-brush"></i>
            <span className="menuLink menuDesign">Design</span>
          </a>
          <a href="#team">
            <i className="fa fa-fw fa-coffee"></i>
            <span className="menuLink menuTeam">Team</span>
          </a>
          <a href="#satisfaction">
            <i className="fa fa-fw fa-thumbs-up"></i>
            <span className="menuLink MenuSatisfaction">Satisfaction</span>
          </a>
          <a href="#freeTry">
            <i className="fa fa-fw fa-commenting"></i>
            <span className="menuLink menuFree">Free Sign Up!</span>
          </a>
          <a href="#contact">
            <i className="fa fa-fw fa-handshake-o"></i>
            <span className="menuLink Menu Contact">Contact Us</span>
          </a>
          <hr/>
          <p>connect with us!</p>
          <div>
            <a className="fa fa-2x fa-facebook icon" href="#"></a>
            <a className="fa fa-2x fa-google-plus icon" href="#"></a>
            <a className="fa fa-2x fa-twitter icon" href="#"></a>
            <a className="fa fa-2x fa-apple icon" href="#"></a>
            <a className="fa fa-2x fa-android icon" href="#"></a>
          </div>
        </Menu>
      </div>
    );
  }
}

MenuBar.propTypes = {
};
