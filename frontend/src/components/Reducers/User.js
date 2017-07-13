const UserReducer = (state = {}, action) => {

  console.log(action);
  const initialUser = {isFetching: false}
  switch (action.type) {
    case "USER_UPDATE":
        return action.user || initialUser;
    case "INIT_USER":
        return action.user;
    default:
        return state;
  }
}


export default UserReducer;
