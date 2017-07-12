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

const store = initStore();
store.subscribe( () => {
    const chatss = store.getState();
    console.log(chatss);
})

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>

  , document.getElementById('root')
);
registerServiceWorker();
