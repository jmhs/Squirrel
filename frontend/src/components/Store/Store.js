import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ChatReducer from '../Reducers/Chat'
import UserReducer from '../Reducers/User'
import RoomReducer from '../Reducers/Room'

import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';


export let initStore = () => {

  const reducer = combineReducers( {
    chat: ChatReducer,
    user: UserReducer,
    room: RoomReducer
  });

  const history = createHistory();
  const historyWare = routerMiddleware(history);

  const store = createStore( reducer, compose(
    applyMiddleware(thunk,historyWare),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return [store, history];
}
