import React, {PropTypes} from 'react';
import { stack as Menu } from 'react-burger-menu';

import "./Menu.css";

export default class MenuLink extends React.Component {
  constructor(props) {
    super(props);
  }

  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu>
        <a href="#" style="display: block; outline: none;">
          <i className="fa fa-fw fa-star-o"></i>
          <span>Testing</span>
        </a>
        <a href="#" style="display: block; outline: none;">
          <i className="fa fa-fw fa-star-o"></i>
          <span>Testing</span>
        </a>
        <a href="#" style="display: block; outline: none;">
          <i className="fa fa-fw fa-star-o"></i>
          <span>Testing</span>
        </a>
        <a href="#" style="display: block; outline: none;">
          <i className="fa fa-fw fa-star-o"></i>
          <span>Testing</span>
        </a>
      </Menu>
    );
  }
}

MenuLink.propTypes = {
};
