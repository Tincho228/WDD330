// List of tasks not in localstorage
const todosList = [
    {
      id: "123651",
      content: "Go shopping",
      completed: true,
    },
    {
        id: "123651",
        content: "Visit Grandma",
        completed: false,
      },
      {
        id: "123651",
        content: "Drive home",
        completed: false,
      },
      {
        id: "123651",
        content: "Finish homework",
        completed: false,
      },
      {
        id: "123651",
        content: "Dinner with family",
        completed: true,
      }
  ];
/*
read a value from local storage and parse it as JSON @param {string} key The key under which the value is stored under in LS
@return {array} The value as an array of objects */

function readFromLS(key) {
    switch(key) {
        case 'active':
          
          return todosList.filter(todo => todo.completed === false);
          
        case 'completed':
          
          return todosList.filter(todo => todo.completed === true);      
          
          
        default:
          return todosList;
      }
 }
/*
write an array of objects to local storage under the provided key @param {string} key The key under which the value is stored under in LS
* @param {array} data The information to be stored as an array of objects. Must be serialized.

*/
function writeToLS(key, data) { }

export {
    readFromLS,
    writeToLS
}