import React, {PropTypes} from 'react';
import Menu from '../Menu/Menu';

// import burgerBtn css
import './BurgerBtn.css';

export default class BurgerBtn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="BurgerBtn">
        <button className="hamburger" type="button">
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
      </div>);
  }
}

BurgerBtn.propTypes = {
};
