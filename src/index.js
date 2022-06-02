import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import './style.css';

const todos = document.querySelector('.todos__list');
const btnAdd = document.querySelector('#btn-add');
const todoAdd = document.querySelector('#todo-add')

class todoTask {
  constructor(index, description, completed = false ){
    this.index = index;
    this.description = description;
    this.completed = completed;
  }
}

const todoData = [];

const addTodo = () => {
  const todo = new todoTask(1, todoAdd.value)
  if(todoAdd.value){
    todos.innerHTML += ` <li class="todo_list">
    <div>
       <input type="checkbox" id="todo${todo.index}" name="todo${todo.index}">
       <label for="todo${todo.index}">${todo.description}</label>
    </div>
    <button class="btn">
       <i class="fa-solid fa-ellipsis-vertical"></i>
    </button>
   </li>` 
  } else {
    console.log("The input is empty please try again ")
  }
  
}
/****Add*****/

const renderData = () => {
  console.log("Visto de afuera",todoData)
  todoData.forEach((todo) => {
     todos.innerHTML += ` <li class="todo_list">
     <div>
        <input type="checkbox" id="todo${todo.index}" name="todo${todo.index}">
        <label for="todo${todo.index}">${todo.description}</label>
     </div>
     <button class="btn">
        <i class="fa-solid fa-ellipsis-vertical"></i>
     </button>
    </li>`   
    /* const todoList = document.createElement('li');
    const checkbox = document.createElement('div');
    const inputTodo = document.createElement('input');
    const labelTodo = document.createElement('label');
    const btnTodo = document.createElement('button');
    todoList.classList.add('todo_list');
    inputTodo.setAttribute('type', 'checkbox');
    inputTodo.setAttribute('id', `todo${todo.index}`);
    inputTodo.setAttribute('name', `todo${todo.index}`);
    if (todo.completed) {
      inputTodo.setAttribute('checked', true);
    }
    labelTodo.setAttribute('for', `todo${todo.index}`);
    labelTodo.innerHTML = `${todo.description}`;
    btnTodo.classList.add('btn');
    btnTodo.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';
    checkbox.appendChild(inputTodo);
    checkbox.appendChild(labelTodo);
    todoList.appendChild(checkbox);
    todoList.appendChild(btnTodo);
    todos.appendChild(todoList); */
  });
};


btnAdd.addEventListener('click', ()=>{
  
  console.log("holi",todoData)
  addTodo()
  console.log(todoAdd.value)
  });

