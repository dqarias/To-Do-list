import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import './style.css';

const todos = document.querySelector('.todos__list');
const btnAdd = document.querySelector('#btn-add');
const todoAdd = document.querySelector('#todo-add');

class Todo {
  constructor(index, description, completed){
    this.index = index;
    this.description = description;
    this.completed = completed;
  }
}


const todoHtml = (todo) => {
  todos.innerHTML += `<li class="todo_list">
  <div>
     <input type="checkbox" id="todo${todo.index}" name="todo${todo.index}">
     <label for="todo${todo.index}">${todo.description}</label>
  </div>
  <button onclick="removeTodo(${todo.index})" class="btn">
     <i class="fa-solid fa-ellipsis-vertical"></i>
     <i  class="fa-solid fa-trash"></i>
  </button>
 </li>` 
}

const getTodo =() => {
  const todos = localStorage.getItem('todoData')
  if(todos){
   return JSON.parse(todos);
  } else {
   return [];
  }
 }
const todoData = getTodo();

const storeTodo = (store) => {
  localStorage.setItem('todoData', JSON.stringify(store));
}

const addTodo = () => {
  const todo = new Todo(todoData.length + 1, todoAdd.value, false)
  if(todoAdd.value){
  todoHtml(todo)
  todoData.push(todo);
  console.log(todoData)
  storeTodo(todoData);
  return todoData;
  } else {
    console.log("The input is empty please try again ")
  }
}

const renderTodo = () => {
 
  console.log("Visto de afuera",todoData)
  todoData.forEach((todo) => { 
  todoHtml(todo)
  });
  
};

renderTodo();

btnAdd.addEventListener('click', ()=>{

  addTodo()
  todoAdd.value='';
  console.log(todoAdd.value)
  });




