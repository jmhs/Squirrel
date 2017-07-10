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
          <a href="#">
            <i className="fa fa-fw fa-home"></i>
            <span className="menuLink">Home</span>
          </a>
          <a href="#">
            <i className="fa fa-fw fa-telegram"></i>
            <span className="menuLink">Features</span>
          </a>
          <a href="#">
            <i className="fa fa-fw fa-paint-brush"></i>
            <span className="menuLink">Design</span>
          </a>
          <a href="#">
            <i className="fa fa-fw fa-coffee"></i>
            <span className="menuLink">Team</span>
          </a>
          <a href="#">
            <i className="fa fa-fw fa-thumbs-up"></i>
            <span className="menuLink">Satisfaction</span>
          </a>
          <a href="#">
            <i className="fa fa-fw fa-smile-o"></i>
            <span className="menuLink">Benefits</span>
          </a>
          <a href="#">
            <i className="fa fa-fw fa-commenting"></i>
            <span className="menuLink">Free Try!</span>
          </a>
          <a href="#">
            <i className="fa fa-fw fa-handshake-o"></i>
            <span className="menuLink">Subscribe Now!</span>
          </a>
          <hr/>
          <p>connect with us</p>
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
