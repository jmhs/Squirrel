import { createStore, compose, combineReducers } from 'redux';
//import UserRe from '../Reducers/User'
import ChatReducer from '../Reducers/Chat'

export let initStore = () => {

  const reducer = combineReducers( {
    ChatReducer

  });

  const store = createStore( reducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
}
