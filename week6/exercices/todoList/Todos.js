import * as lsModule from "./ls.js";
import * as utilitiesModule from "./utilities.js";



// Add a Todos class to the Todos.js file, and make it the default export for the module
export default class Todos {
  constructor(elementId) {
    // set a variable with the parent element our todo list will be built in
    this.todosParent = utilitiesModule.qs(elementId);
    // and the key we will use to read/write from localStorage
    this.todosKey = "key";
    this.todoList = null;
  }



  /*Add a method to the Todos class called listTodos(). It should use the renderTodoList function to output our todo list when called.
  It should get called when a todo is added, or removed, and when the Todos class is instantiated.*/
  listTodos() {
    this.todosParent.innerHTML = null;
    const list = Array.from(lsModule.readFromLS());
    renderTodoList(list, this.todosParent);
    const btnComplete = utilitiesModule.qs('#btnComplete');
    const btnActive = utilitiesModule.qs('#btnActive');
    const btnAll = utilitiesModule.qs('#btnAll');
    const btnSubmit = utilitiesModule.qs('#btnSubmit');
    const btnRemove = utilitiesModule.qss('#btnRemove'); // Node List
    const btnCheck = utilitiesModule.qss('#btnCheck'); // Node List
    /*btnComplete.addEventListener('touchend', () => {
      this.showTodosComplete();
    })*/
    utilitiesModule.onTouch(btnComplete, this.showTodosComplete.bind(this));
    btnActive.addEventListener('touchend', () => {
      this.showTodosActive();
    })
    btnAll.addEventListener('touchend', () => {
      this.listTodos();
    })
    btnSubmit.addEventListener('click', this.addTodo);
    
    btnRemove.forEach(btn => {
      btn.addEventListener('click', this.removeTodo)
    })  
    btnCheck.forEach(btn => {
      btn.addEventListener('click', e => {this.checkTodo(btn)})
    })  
  }

  // It renders a list of all completed tasks
  showTodosComplete() {
    this.todosParent.innerHTML = null;
    const list = Array.from(lsModule.readFromLS('complete'));
    renderTodoList(list, this.todosParent);
  }

  // It renders a list of all active tasks
  showTodosActive() {
    this.todosParent.innerHTML = null;
    const list = Array.from(lsModule.readFromLS('active'));
    renderTodoList(list, this.todosParent);
  }

  /* It should grab the input in the html where users enter the text of the task, then send that along with the key to a SaveTodo() function. Then update the display with the current list of tasks*/
  addTodo() {
      const id = new Date().getTime();
      const content = utilitiesModule.qs('#content').value;
      // create an object
     let task = {
        id:id,
        content:content,
        completed:false
      }
      saveTodo(task); 
  }
  removeTodo() {
    console.log("remove")
  }
  checkTodo(btn) {
    btn.classList.toggle("btn-success")
    console.log("check")
  }
  // Filter all the active tasks
  filterTodo(){

  }
}

/******************** */
/*  RENDER FUNCTIONS  */
/******************** */
/* foreach todo in list, build a li element for the todo, and append it to element @param {array} list The list of tasks to render to HTML @param {element} element The DOM element to insert our list elements into.
*/
function renderTodoList(list, parent) {
  list.forEach(todo => {
    parent.appendChild(renderOneTodoList(todo));
  });

}

function renderOneTodoList(todo) {
  const item = document.createElement("li");
  item.setAttribute("class", "list-group-item");
  item.innerHTML = ` <div class="d-flex align-items-center justify-content-between">
        <span id="${todo.content}">${todo.content}</span>
        <div class="d-flex">
            <button id="btnCheck" data-content=${todo.content} class="btn btn-secondary" style="margin-right:5px" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Mark as done"><i class="fas fa-check"></i></i>
            <button id="btnRemove" data-content=${todo.content} class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Delete"><i class="fa fa-trash" aria-hidden="true"></i></button>
        </div>
    </div> `;
  return item;
}


/*In the Todo.js module, but not in the Todos class, create the following function
  build a todo object, add it to the todoList, and save the new list to local storage.
  @param {string} key The key under which the value is stored under in LS @param {string} task The text of the task to be saved.*/
function saveTodo(task, key) {
  console.log(task);
}
//A todo should look like this: { id : timestamp, content: string, completed: bool }


/*  In the Todos.js module, but not in the Todos class create the following function
  check the contents of todoList, a local variable containing a list of ToDos. If it is null then pull the list of todos from localstorage, update the local variable, and return it
  @param {string} key The key under which the value is stored under in LS @return {array} The value as an array of objects*/

function getTodos(key) {

}