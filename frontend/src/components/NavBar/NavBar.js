import React, {PropTypes} from 'react';
import Menu from './Menu/Menu';


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
        <Menu/>
      </div>
    );
  }
}

NavBar.propTypes = {
};
