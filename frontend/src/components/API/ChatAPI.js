// receives and emits messages and user data



export const postMessages = (Messages) => {

  emit messages
  console.log(Messages);

  // if(Array.isArray(Messages)){
  //   localStorage.setItem('Todos', JSON.stringify(Todos));
  // }
}

export const getMessages = () => {
  const todosJSON = localStorage.getItem('Todos');
  let Todos = [];

  try {
    Todos = JSON.parse(todosJSON);
  }catch(e){
    console.log("Error: Cound not decode Todo's from localstorage");
  }

  return Array.isArray(Todos) ? Todos : [];
}
