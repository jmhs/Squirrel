import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';
import {getUser} from '../Actions/User'

import Chat from '../Chat/Chat'
import LandingPage from '../LandingPage/LandingPage'
import LogIn from '../LogIn/LogIn'
import SignUp from '../SignUp/SignUp'
import LoadingPage from '../LoadingPage/LoadingPage'

import './App.css';

class App extends Component {

  componentDidMount() {
    //this.props.getUser()
  }
  render() {
    const isLoggedIn = this.props.user.isLoggedIn;
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route path="/chat" component={Chat} />
          <Route path="/login" component={LogIn}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/loadingpage" component={LoadingPage}/>
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => {dispatch(getUser())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// {isLoggedIn ? (<Route path="/chat" component={Chat} />) : (<Route path="/login" component={LogIn}/>)}
