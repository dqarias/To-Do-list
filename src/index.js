import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import './style.css';
import Todo from './modules/todo.js'

const todos = document.querySelector('.todos__list');
const btnAdd = document.querySelector('#btn-add');
const todoAdd = document.querySelector('#todo-add');
console.log(todos)


const todoHtml = (todo) => {
  todos.innerHTML += `<li id="todos${todo.index}" class="todo_list">
  <div>
     <input type="checkbox" id="todo${todo.index}" name="todo${todo.index}">
     <label for="todo${todo.index}">${todo.description}</label>
  </div>
  <button>
  <i class="fa-solid fa-ellipsis-vertical"></i>
  </button>
  <button id="${todo.index}" class="btn btn-remove">
     <i class="fa-solid fa-trash"></i>
  </button>
 </li>` 

 const removeBtn = document.querySelectorAll(".btn-remove")
 console.log(removeBtn)
 removeBtn.forEach((singleTodo)=>{
 singleTodo.addEventListener('click', ()=>{
 deleteTodo(singleTodo.getAttribute('id'))
     
   })
 }) 
}

const getTodo =() => {
  const todos = localStorage.getItem('todoData')
  if(todos){
   return JSON.parse(todos);
  } else {
   return [];
  }
 }


const storeTodo = (store) => {
  localStorage.setItem('todoData', JSON.stringify(store));
}

const addTodo = () => {

  if(todoAdd.value){
  const todo = new Todo(todoData.length + 1, todoAdd.value, false)
  todoHtml(todo)
  todoData.push(todo);
  console.log("Aca todo data",todoData)
  storeTodo(todoData);
  todoAdd.value='';
  } else {
    console.log("The input is empty please try again ")
  }
}

const deleteTodo = (index) =>{
  const li = document.getElementById(`todos${index}`);
  let Todos = getTodo();
  Todos = Todos.filter(task => task.index !== Number(index));
  storeTodo(Todos)
  li.remove();
}
const todoData = getTodo();

const renderTodo = () => {
  console.log("Visto de afuera",todoData)
    todoData.forEach((todo) => { 
      todoHtml(todo)
      });   
};

renderTodo();


btnAdd.addEventListener('click', ()=>{
  addTodo()
  console.log(todoAdd.value)
  });

/* const btnRemove = document.querySelector('.btn-remove');
console.log( btnRemove)
btnRemove.addEventListener('click', ()=>{
  console.log("click remove")
}) 
 */


