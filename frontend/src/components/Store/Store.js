import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ChatReducer from '../Reducers/Chat'
import UserReducer from '../Reducers/User'

export let initStore = () => {

  const reducer = combineReducers( {
    chat: ChatReducer,
    user: UserReducer
  });

  const store = createStore( reducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
}
