/******************** **/
/** THIS IS THE MAIN  **/
/******************** **/   

// Import Todos class object

import Todos from "./Todos.js";

// Initialize Todos Object. TodosPrent is the id of the list parent
const myTodos = new Todos('#todosParent');
// call Todos Parent
myTodos.listTodos();