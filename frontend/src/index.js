import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {browserHistory} from 'react-router'
//import {syncHistoryWithStore} from 'react-router-redux'


// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ChatReducer from './components/Reducers/Chat'
import { initStore } from './components/Store/Store'
import { getUser, initUser } from './components/Actions/User'

const store = initStore();
store.subscribe( () => {
    const chats = store.getState();
    console.log(chats);
})

//const history = syncHistoryWithStore(browserHistory, store)
// store.dispatch(getUser());
store.dispatch(initUser())



ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>

  , document.getElementById('root')
);
registerServiceWorker();
