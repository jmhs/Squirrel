import React, {PropTypes} from 'react';
import BurgerBtn from './BurgerBtn/BurgerBtn';


export default class NavBar extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <BurgerBtn/>
      </div>
    );
  }
}

NavBar.propTypes = {
};
