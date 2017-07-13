import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ChatReducer from './components/Reducers/Chat'
import { initStore } from './components/Store/Store'
import {getUser} from './components/Actions/User'

const store = initStore();
store.subscribe( () => {
    const chats = store.getState();
    console.log(chats);
})

store.dispatch(getUser());

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>

  , document.getElementById('root')
);
registerServiceWorker();
