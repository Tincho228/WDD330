import * as todosModule from "./Todos.js";
/* Read a value from local storage and parse it as JSON @param {string} key The key under which the value is stored under in LS
@return {array} The value as an array of objects */

function readFromLS(key) {
  switch (key) {
    case 'active':
      const todosListActive = JSON.parse(localStorage.getItem("Todos List"));
      if(todosListActive){
        if(todosListActive.length != 0){
          return todosListActive.filter(todo => todo.completed === false);}
        }
      return null;

    case 'complete':
      const todosListComplete = JSON.parse(localStorage.getItem("Todos List"));
      if(todosListComplete){
        if(todosListComplete.length != 0){
          return todosListComplete.filter(todo => todo.completed === true);}
      }
      return null;


    default:
      const todosListAll = JSON.parse(localStorage.getItem("Todos List"));
      if(todosListAll){
        if(todosListAll.length != 0){
        return todosListAll}
      }
      const todosListNew = []
      localStorage.setItem("Todos List", JSON.stringify(todosListNew));
      return null ;
  }
}

/* Write an array of objects to local storage under the provided key @param {string} key The key under which the value is stored under in LS
* @param {array} data The information to be stored as an array of objects. Must be serialized.*/

function writeToLS(data) {
  let key = "Todos List"
  const existing = JSON.parse(localStorage.getItem(key))
  if(existing){
    existing[existing.length] = data;
    localStorage.setItem(key, JSON.stringify(existing));
    return;
  }
  existing[0] = data;
  localStorage.setItem(key, JSON.stringify(existing));
  return;
  
}
function removeToLS(data){
  let key = "Todos List"  
  const existing = JSON.parse(localStorage.getItem(key))
  for ( var i = 0; i< existing.length; i++){
    if(existing[i].id === parseInt(data)){
          existing.splice(i, 1);
    }
  }
  localStorage.setItem(key, JSON.stringify(existing))
  return;
}
function checkToLS(data){
  let key = "Todos List"  
  const existing = JSON.parse(localStorage.getItem(key))
  for ( var i = 0; i< existing.length; i++){
    if(existing[i].id === parseInt(data)){
          if(existing[i].completed === false){
            existing[i].completed = true ;
          }else{
            existing[i].completed = false ;
          }
    }
  }
  localStorage.setItem(key, JSON.stringify(existing))
  return;
}

export {
  readFromLS,
  writeToLS,
  removeToLS,
  checkToLS
}