export const postMessages = (text) => {
  return {
    type: 'POST_MESSAGES', //instructions
    text
  }
}
const io = require('socket.io-client/dist/socket.io.js');
export const socket = io.connect('http://ec2-13-59-144-224.us-east-2.compute.amazonaws.com/');
// socket.emit("userLongitude", 103.9);
// socket.emit("userLatitude", 1.25);


export const sendMessages = (message) => {
  return (dispatch) => {


    socket.emit('new-message', { message
    });
    console.log(message)
    //dispatch(postMessages(message));
  //dispatch sents user to the updateUser reducer and stores
}
}


export const getMessages = () => {
  return (dispatch) => {
    //const io = require('socket.io-client/dist/socket.io.js');
    //const socket = io.connect('http://localhost:3001');
    socket.on('receive-message', (msg) => {
      // console.log('adding new message in store')
      console.log('messages', msg)
      dispatch(postMessages(msg))
  })

}
}


export const chatRoom = () => {
  return {
    type: 'CHAT_ROOM'
  }
}
