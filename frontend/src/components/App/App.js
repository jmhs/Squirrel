import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//import { Router, Route, browserHistory } from 'react-router'
import { ConnectedRouter } from 'react-router-redux';

import { createBrowserHistory } from 'history';

import { connect } from 'react-redux';
import { getUser } from '../Actions/User';

import { history } from '../../index';

import Chat from '../Chat/Chat';
import LandingPage from '../LandingPage/LandingPage';
import LogIn from '../LogIn/LogIn';
import SignUp from '../SignUp/SignUp';
import LoadingPage from '../LoadingPage/LoadingPage';
import NotFound from '../NotFound/NotFound';

import './App.css';

//const history = createBrowserHistory()
class App extends Component {

  componentDidMount() {
    this.props.getUser()
    console.log("component did mount")
  }

  // requireAuth = () => {
  //   console.log('authorized?')
  //   if (this.props.user === true) {
  //     console.log(this.props.user)
  //     if(history.location.pathname==='/chat') {
  //       history.push('/login')
  //     } else if (history.location.pathname==='/') {
  //       console.log('come to home')
  //       history.push('/')
  //     }
  //   } else {
  //     history.push('/chat')
  //   }
  // }

  render() {
    // const isLoggedIn = this.props.user.isLoggedIn;
    return (
      <div>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route path="/chat" component={Chat} /> :
          <Route path="/login" component={LogIn} />
          <Route path="/signup" component={SignUp}/>
          <Route path="/loadingpage" component={LoadingPage}/>
          <Route component={NotFound}/>
        </Switch>
      </ConnectedRouter>
    </div>
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
