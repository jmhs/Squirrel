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

// const requireAuth = (nextState, replaceState) => {
//   if(!this.isLoggedIn())
//   replaceState({nextPathname: nextState.location.pathname}, '/login')
// }
// onEnter={requireAuth}

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route path="/chat/A" component={Chat} />
          <Route path="/chat/B" component={Chat} />
          <Route path="/chat/C" component={Chat} />
          <Route path="/chat/D" component={Chat} />
          <Route path="/login" component={LogIn}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/loadingpage" component={LoadingPage}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
