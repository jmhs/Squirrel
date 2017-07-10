import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Chat from '../Chat/Chat'
import LandingPage from '../LandingPage/LandingPage'
import LogIn from '../LogIn/LogIn'
import SignUp from '../SignUp/SignUp'
import LoadingPage from '../LoadingPage/LoadingPage'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route path="/chat" component={Chat}/>
          <Route path="/login" component={LogIn}/>
          <Route path="/signup" component={SignUp}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
