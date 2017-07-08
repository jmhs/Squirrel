import React, {PropTypes} from 'react';
import Menu from '../Menu/Menu';

// import burgerBtn css
import './BurgerBtn.css';

export default class BurgerBtn extends React.Component {
  constructor(props) {
    super(props);
    // create a state of active to make add in a class name when clicked
    this.state = {
      active: false
    };
  }

// on click to set the state to toggle the active to false or true
  onClick() {
    if (this.state.active) {
      this.setState({active: false});
    } else {
      this.setState({active: true});
    }
  }

  render() {
    // add the class name to menu bar so if active is true, add is-active to the menu else nothing is added.
    let isActive = this.state.active ? "is-active" : "";
    return (
      <div className="BurgerBtn">
        <div className={ "hamburger hamburger--spin "+ isActive} onClick={this.onClick.bind(this)} >
          <div className="hamburger-box">
            <div className="hamburger-inner"></div>
              <Menu width={'100px'}/>
          </div>
        </div>
      </div>);
  }
}

BurgerBtn.propTypes = {
};
