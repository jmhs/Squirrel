import React, { Component } from 'react';
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom';
import { createBrowserHistory } from 'history'

import { connect } from 'react-redux';
import { getUser } from '../Actions/User'

import Chat from '../Chat/Chat'
import LandingPage from '../LandingPage/LandingPage'
import LogIn from '../LogIn/LogIn'
import SignUp from '../SignUp/SignUp'
import LoadingPage from '../LoadingPage/LoadingPage'

import './App.css';

const history = createBrowserHistory()
class App extends Component {

  componentDidMount() {
    this.props.getUser()
    console.log("component did mount")
  }

  requireAuth = () => {
    console.log('authorized?')
    if (this.props.user.isFetching === true) {
      console.log(history.location.pathname, 'location')
      if(history.location.pathname==='/chat') {
        history.push('/login')
      } else if (history.location.pathname==='/') {
        console.log('come to home')
        history.push('/')
      }
    } else {
      history.push('/chat')
    }
  }

  render() {
    const isLoggedIn = this.props.user.isLoggedIn;
    return (
      <Router history = {history}>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route path="/chat" component={Chat} onEnter={this.requireAuth()}/>
          <Route path="/login" component={LogIn} />
          <Route path="/signup" component={SignUp}/>
          <Route path="/loadingpage" component={LoadingPage}/>
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        room: state.room
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => {dispatch(getUser())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// {isLoggedIn ? (<Route path="/chat" component={Chat} />) : (<Route path="/login" component={LogIn}/>)}
