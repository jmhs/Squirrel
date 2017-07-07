import React, {PropTypes} from 'react';

export default class SendText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className="btn btn-default" type="submit" id="submitBtn">Submit!</button>
    );
  }
}

SendText.propTypes = {
};
