export const setUserLoginStatus = (user) => { //storing into local storage of the browser
  if(user._id){ // to prevent error being saved into local storage
    localStorage.setItem('userStatus', JSON.stringify('user is logged in')); // 1st arugment sets the name, 2nd arugment = item to store
  }else{
    localStorage.setItem('userStatus', JSON.stringify(''));
  }
}
