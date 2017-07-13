import React, {PropTypes} from 'react';
import LoadingPage from '../LoadingPage/LoadingPage';

import axios from 'axios';

import './SignUp.css';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      latitude: "",
      longitude: "",
      loading: true,
      error: ""
    };
  }

  // componentWillMount() {
  //   var state = this.state;
  //   const getLocation = () => {
  //
  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition(showPosition);
  //     } else {
  //       console.log("Geolocation is not supported by this browser.");
  //     }
  //   }
  //   const showPosition = (position) => {
  //     state.latitude = position.coords.latitude;
  //     state.longitude = position.coords.longitude;
  //     this.setState(state)
  //     console.log(state);
  //   }
  //   getLocation();
  //   console.log(this.state.latitude.toString().length);
  // }
  //
  // componentDidMount() {
  //   var state = this.state;
  //   if (this.state.latitude.toString().length + this.state.longitude.toString().length < 0) {
  //     this.state.loading = true;
  //   } else {
  //     this.state.loading = false;
  //   };
  //   console.log(this.state.loading);
  // }

  onChange = (e) => {
    var state = this.state
    var key = e.target.id;
    var value = e.target.value;

    state[key] = value;
    console.log(state);
    this.setState(state);
  }

  localSignup = (e) => {
    e.preventDefault();
    axios.post('/auth/signup', this.state).then((response) => {

      let data = response.data;
      if (data.error) {
        console.log(data.message)
        this.setState({error: data.message});
      } else {
        console.log("AJAX: Signed up @ '/auth/signup'");
        this.props.history.push('/login')
      }
    }).catch((error) => {
      console.error("AJAX: Could not signup @ '/auth/signup'", error)
      this.setState({error: "Notify the dev team!"});
    });
  }

  backToLogin = (e) => {
    e.preventDefault();
    window.location.href = "/login";
  }

  backToHome = (e) => {
    e.preventDefault();
    window.location.href = "/";
  }

  // currLatitude and currLongitude are "display:none". Current LAT and LONG values are in the input fields for the purpose of storing to User upon account creation. Whenever user logs in, the LAT and LONG are updated for his account.
  render() {
    return (

      <div className="container">
        <div className="col-md-4 col-md-offset-4">
          <div className="panel panel-primary">
            <div className="panel-heading" id="formHeader">SIGNUP</div>
            <form id="form" role="form">
              <div className="error">{this.state.error}</div>
              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="Please enter email" value={this.state.email} onChange={this.onChange}/>
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Please enter password" value={this.state.password} onChange={this.onChange}/>
              <br/>
              <button type="submit" className="btn btn-default submit" id="signupBtn" onClick={this.localSignup}>Sign me up!</button>
              <button type="submit" className="btn btn-primary submit" id="loginBtn" onClick={this.backToLogin}>Back to Login</button>
              <button type="submit" className="btn btn-default submit" id="homeBtn" onClick={this.backToHome}>Back To Home</button>
              <input type="number" className="form-control" id="currLatitude" placeholder="Current latitude" value={this.state.latitude} onChange={this.onChange}/>
              <input type="number" className="form-control" id="currLongitude" placeholder="Current longitude" value={this.state.longitude} onChange={this.onChange}/>
            </form>
          </div>
        </div>
      </div>

    );
  }
}

SignUp.propTypes = {};

// <div className="form-group">
//   <input type="number" className="form-control" id="currLatitude" placeholder="Current latitude" value={this.state.latitude} onChange={this.onChange}/>
//   <input type="number" className="form-control" id="currLongitude" placeholder="Current longitude" value={this.state.longitude} onChange={this.onChange}/>
// </div>

// <div className="signup">
//   <form>
//     <div className="error">{this.state.error}</div>
//     <div className="form-group">
//       <label htmlFor="email">Email address</label>
//       <input type="email" className="form-control" id="email" placeholder="Please enter email" value={this.state.email} onChange={this.onChange}/>
//     </div>
//     <div className="form-group">
//       <label htmlFor="password">Password</label>
//       <input type="password" className="form-control" id="password" placeholder="Please enter password" value={this.state.password} onChange={this.onChange}/>
//     </div>
//     <button type="submit" className="btn btn-default submit" id="signupBtn" onClick={this.localSignup}>Sign me up!</button>
//     <button type="submit" className="btn btn-default submit" id="logInBtn" onClick={this.backToLogIn}>Back To Login</button>
//     <button type="submit" className="btn btn-default submit" id="homeBtn" onClick={this.backToHome}>Back To Home</button>
//
//   </form>
// </div>

// <button type="submit" className="btn btn-primary submit" id="loginBtn" onClick={this.localLogin}>Login</button>
