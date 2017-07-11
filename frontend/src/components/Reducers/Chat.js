//Reducers take the previous state and an action, and returns the next state.


//import socket messages to API
//initialise//

//import { getTodos } from '../API/TodoAPI';
//const initialTodos = getTodos();

const ChatMessages = (state = [], action) =>{

  console.log(action);

  switch (action.type) {
    case 'POST_MESSAGES':
    return [
      ...state,
      {
        id: action.id,
        text: action.text,
      }
    ]
    break;
// ToBeForSelf/NotSelfMessages
    // case 'TOGGLE_TODO':
    //   return state.map((todo) => {
    //       if(action.id == todo.id){
    //         todo.completed = todo.completed ? false : true;
    //       }
    //       return todo;
    //   });
    // break;

    default:
      return state
  }
}

export default ChatMessages;
