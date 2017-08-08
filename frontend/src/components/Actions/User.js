import axios from 'axios';
import { store } from '../../index';
import { push } from 'react-router-redux';

export const updateUser = (user) => {
  return {
    type: "USER_UPDATE",
    user
  }
}

export const getUser = () => {
  return (dispatch) => {
    axios.get('/auth/user')
      .then( (response) => {
        const user = response.data;
        const notLoggedIn = {}
          user.isFetching = false
          console.log('user exists', user.isFetching)
          dispatch(updateUser(user));
          store.dispatch(push('/chat'))
      })
      .catch((error)=> {
        console.error("AJAX: Could not get user @ '/auth/user'")
        dispatch(updateUser({isFetching: true}));
      });
  };
}

export const localLogin = (credentials) => {
  return (dispatch) => {
    axios.post('/auth/login', credentials).then((response) => {
      let data = response.data;
      console.log(data)
      if (data.error) {
        console.log(data.message)
        //this.setState({error: data.message, isLoggedIn: false});
      } else {
        console.log("AJAX: Logged in @ '/auth/user'");
      //  this.setState({isLoggedIn: true});
      console.log('dataa',data)
        dispatch(updateUser(data))
        console.log('before push chat')
       // this.props.getUser()
        // window.location.href = "/chat" + this.state.roomRoute;
        //this.props.history.push('/chat');
        store.dispatch(push('/chat'));
      }})
    // }).catch((error) => {
    //   console.log("AJAX: Could not login @ '/auth/login'")
    //   // this.setState({error: "Login error, notify the dev team!"});
    // });
  };
}

export const initUser = (user={isFetching: true}) => {
  return {
    type: "INIT_USER",
    user
  }
}
