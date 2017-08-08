import React, {PropTypes} from 'react';
import ReactLoading from 'react-loading';
import LoadingPage from '../LoadingPage/LoadingPage';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import { sendLong, sendLat } from '../Actions/Chat';
import { getUser, updateUser, localLogin } from '../Actions/User';
import { getRoom } from '../Actions/Room';
import {chatRoom} from '../Actions/Chat';


import axios from 'axios';

import './LogIn.css';

//const io = require('socket.io-client/dist/socket.io.js');

class LogIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      latitude: 0,
      longitude: 0,
      loading: false,
      roomRoute: "",
      error: "",
      chatRoom: ""
    };
  }

  componentWillMount() {
    let state = this.state;
    const getLocation = () => {

      if (navigator.geolocation) {
        console.log('geo available')
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    }
    const showPosition = (position) => {
      console.log('show pos start')
      state.latitude = position.coords.latitude.toFixed(6);
      state.longitude = position.coords.longitude.toFixed(6);
      console.log('showpos', state)
      state.loading = false;
      this.setState(state)
      console.log('after get location', this.state)
    }
    getLocation();

  }

  componentDidMount() {
    console.log('login component did mount')
  //   let state = this.state;
  //   console.log(state)
  //   setTimeout(()=> {
  //   if (!state.longitude) {
  //     console.log('true ')
  //     state.loading = true;
  //   } else {
  //     // setTimeout(()=> {
  //       console.log('lat n long exist')
  //       state.loading = false;
  //       this.setState(state)
  //     // }, 1000)
  //   };
  // }, 2000)
    console.log(this.state.loading);
  }

  onChange = (e) => {
    var state = this.state
    var key = e.target.id;
    var value = e.target.value;

    state[key] = value;
    console.log(state);
    //console.log(typeof(this.state.latitude));
    this.setState(state);
  }

  LocalLogin = () => {
    console.log("We are at LocalLogins")
    if(this.state.email == "" || this.state.password == ""){
      console.log("either the email or the password is empty");
      // e.preventDefault();
    }else {
      let data1 = {
        email: this.state.email,
        password: this.state.password
      }
      console.log("Login.js Login", data1)
      this.props.Login(data1);

    }



    //e.preventDefault();

    //var state = this.state
    //connect to the back to send the longitude and latitude
    // const socket = io.connect('http://localhost:3001');
    // socket.emit("userLongitude", this.state.longitude);
    // socket.emit("userLatitude", this.state.latitude);


    //const chatRoom = () => {

    //   if (this.state.latitude !== 0) {
    //     if (this.state.latitude < 1.473298 && this.state.latitude > 1.352083) {
    //       if (this.state.longitude < 104.021301 && this.state.longitude > 103.819836) {
    //         // go to room B
    //         state.roomRoute = "/B";
    //         state.chatRoom = "roomB";
    //       } else {
    //         // go to room A
    //         state.roomRoute = "/A";
    //         state.chatRoom = "roomA";
    //       }
    //     } else if (this.state.latitude < 1.352083 && this.state.latitude > 1.230868) {
    //       if (this.state.longitude < 103.819836 && this.state.longitude > 103.596681) {
    //         // go to room C
    //         state.roomRoute = "/C";
    //         state.chatRoom = "roomC";
    //       } else {
    //         // go to room D
    //         state.roomRoute = "/D";
    //         state.chatRoom = "roomD";
    //       }
    //     } else {
    //       // go to default /chat
    //       state.roomRoute = "/";
    //     }
    //   }
    //   this.setState(state);
    //   this.props.getRoom(this.state.roomRoute)
    // }

    // Call loginVerification and chatRoom functions
    //loginVerification();
    //chatRoom();
  }

  signUp = (e) => {
    e.preventDefault();
    this.props.history.push("/signup");
  }

  backToHome = (e) => {
    e.preventDefault();
    return (
      <Link to='/'></Link>
    )
    this.props.history.push('/');
  }

  // facebookLogin = (e) => {
  //   e.preventDefault();
  //   window.location.href = "/auth/facebook";
  // }

  // currLatitude and currLongitude are "display:none". Lat and Long values are in the input fields for the purpose of AXIOS PUT function. Whenever user logs in, the LAT and LONG are updated for his account.
  render() {
    // if (this.state.loading) {
    //   return <LoadingPage/>;
    // } else {
      return (

        <div className="container">
          <div className="col-md-4 col-md-offset-4">
            <div className="panel panel-primary">
              <div className="panel-heading" id="formHeader">LOGIN</div>
              <form id="form" role="form">
                <div className="error">{this.state.error}</div>
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Please enter email" value={this.state.email} onChange={this.onChange}/>
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Please enter password" value={this.state.password} onChange={this.onChange}/>
                <br />
                <button type="submit" className="btn btn-primary submit" id="loginBtnl" onClick={this.LocalLogin}>Login</button>



                <Link to ="/signup">
                <button type="submit" className="btn btn-default submit" id="signupBtnl">Don't have an account yet? Sign up here!</button>
                </Link>
                <Link to ="/">
                <button type="submit" className="btn btn-default submit" id="homeBtnl">Back to home</button>
                </Link>
                <input type="number" className="form-control" id="currLatitude" placeholder="Current latitude" value={this.state.latitude} onChange={this.onChange}/>
                <input type="number" className="form-control" id="currLongitude" placeholder="Current longitude" value={this.state.longitude} onChange={this.onChange}/>
              </form>
            </div>
          </div>
        </div>

      );
    // }
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    room: state.room,
    chatRoom : state.chatRoom
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    Login: (credentials) => {dispatch(localLogin(credentials));},
    getUser: () => {dispatch(getUser())},
    updateUser: (user) => {dispatch(updateUser(user))},
    getRoom: (room) => {dispatch(getRoom(room))},
    chatRoom : chatRoom => dispatch()
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);

// <div className="or">or</div>
// <button type="submit" className="btn btn-primary facebook" onClick={this.facebookLogin}>Login with Facebook</button>
