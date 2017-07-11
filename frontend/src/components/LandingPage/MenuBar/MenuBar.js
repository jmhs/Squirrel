import React, {PropTypes} from 'react';
import { stack as Menu } from 'react-burger-menu';

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
          <a href="/signup">
            <i className="fa fa-fw fa-user-plus"></i>
            <span className="menuLink">Free Sign Up!</span>
          </a>
          <a href="/login">
            <i className="fa fa-fw fa-sign-in"></i>
            <span className="menuLink">Login</span>
          </a>
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
            <a className="fa fa-lg fa-facebook icon" href="#"></a>
            <a className="fa fa-lg fa-google-plus icon" href="#"></a>
            <a className="fa fa-lg fa-twitter icon" href="#"></a>
            <a className="fa fa-lg fa-instagram icon" href="#"></a>
            <a className="fa fa-lg fa-apple icon" href="#"></a>
            <a className="fa fa-lg fa-android icon" href="#"></a>
          </div>
        </Menu>
      </div>
    );
  }
}

MenuBar.propTypes = {
};
