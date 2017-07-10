import React, {PropTypes} from 'react';

import axios from 'axios';

import './LogIn.css';

var longLang = document.getElementById("loginBtn");
var currLat;
var currLong;

export default class LogIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      latitude: "",
      longitude: "",
      error: ""
    }
  }

  // getLocation = () => {
  //   if(navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(showPosition);
  //   }
  // }
  // showPosition = (position) => {
  //     let state = this.state
  //     this.state.latitude = position.coords.latitude;
  //     this.state.longitude = position.coords.longitude;
  //     this.setState(state)
  //
  //     // console.log("Latitude: " + currLat);
  //     // console.log("Longitude: " + currLong);
  //   }

  onChange = (e) => {
    var state = this.state;
    const getLocation = () => {

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    }
    const showPosition = (position) => {

      console.log(state);

      state.latitude = position.coords.latitude;
      state.longitude = position.coords.longitude;
      this.setState(state)
      console.log(state);

    }
    getLocation()

    var key = e.target.id;
    var value = e.target.value;

    state[key] = value;
    console.log(state);
    this.setState(state);
  }

  localLogin = (e) => {
    e.preventDefault();
    axios.post('/auth/login', this.state).then((response) => {
      let data = response.data;
      if (data.error) {
        console.log(data.message)
        this.setState({error: data.message});
      } else {
        console.error("AJAX: Logged in @ '/auth/user'");
        window.location.href = "/chat";
      }
    }).catch((error) => {
      console.error("AJAX: Could not login @ '/auth/login'")
      this.setState({error: "Login error, notify the dev team!"});
    });

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
        window.location.href = "/login";
      }
    }).catch((error) => {
      console.error("AJAX: Could not signup @ '/auth/signup'", error)
      this.setState({error: "Notify the dev team!"});
    });
  }

  // facebookLogin = (e) => {
  //   e.preventDefault();
  //   window.location.href = "/auth/facebook";
  // }

  render() {
    return (
      <div className="login">
        <form>
          <div className="error">{this.state.error}</div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Please enter email" value={this.state.email} onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Please enter password" value={this.state.password} onChange={this.onChange}/>
          </div>
          <button type="submit" className="btn btn-primary submit" id="loginBtn" onClick={this.localLogin}>Login</button>
          <button type="submit" className="btn btn-default submit" id="signupBtn" onClick={this.localSignup}>Sign up</button>
        </form>

      </div>
    );
  }
}

LogIn.propTypes = {};

// <div className="or">or</div>
// <button type="submit" className="btn btn-primary facebook" onClick={this.facebookLogin}>Login with Facebook</button>



  // HTML5 API to get location
  // localLogin = (e) => {
  //   e.preventDefault();
  //   console.log('get location clicked');
  //     // var longLang = document.getElementById("loginBtn");
  //     function getLocation() {
  //       if (navigator.geolocation) {
  //         navigator.geolocation.getCurrentPosition(showPosition);
  //       } else {
  //         console.log("Geolocation is not supported by this browser.");
  //       }
  //     }
  //     function showPosition(position) {
  //       console.log(position);
  //           currLat = position.coords.latitude;
  //           currLong = position.coords.longitude;
  //           console.log("Latitude: " + currLat);
  //           console.log("Longitude: " + currLong);
  //
  //     }
  //       getLocation()
  // }
