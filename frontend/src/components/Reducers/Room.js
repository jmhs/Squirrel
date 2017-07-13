const RoomReducer = (state = {}, action) => {

  switch (action.type) {
    case "INIT_ROOM":
        return action.room;
    default:
        return state;
  }
}


export default RoomReducer;
