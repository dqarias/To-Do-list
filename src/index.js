import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import './style.css';

import {addTodo, editTodo, deleteTodo, getTodo} from './modules/action.js'

const todos = document.querySelector('.todos__list');
const btnAdd = document.querySelector('#btn-add');
const todoAdd = document.querySelector('#todo-add');

console.log(todos)

const todoHtml = (todo) => {
  todos.innerHTML += `<li id="${todo.index}" class="todo_list">
  <div>
     <input type="checkbox" id="todo${todo.index}" name="todo${todo.index}">
     <label for="todo${todo.index}">${todo.description}</label>
  </div>
  <button id="${todo.index}" class="btn btn-remove">
     <i class="fa-solid fa-trash"></i>
  </button>
 </li>` 

 //Add Event Listener for edit each single book

 console.log("todoHtml", todoData)
 const todoList = document.querySelectorAll(".todo_list")
 console.log(todoList)
 todoList.forEach((singleTodo)=>{
 singleTodo.addEventListener('dblclick', ()=>{
 console.log("Start to edit")
 const editSingleTodo = getTodo();
  console.log("Print getTodo from event Listener", editSingleTodo);
 const editIndex = singleTodo.getAttribute('id')
 console.log("Start to editing this one", editIndex, editSingleTodo[editIndex-1].description )
 singleTodo.innerHTML = `
 <li class= "edit_list" id= "edit${editIndex}"> 
       <div>
       <i class="icon fa-solid fa-check"></i>
         <input class="edit_list-input" id="input-edit${editIndex}" type="text"  value="${editSingleTodo[editIndex-1].description}">
       </div>
       <button id="btn-edit${editIndex}" type ="submit" class="btn" > <i class="fa-solid fa-pen"></i></button>
</li>
 `;

 const todoEdit = document.querySelector(`#btn-edit${editIndex}`)
 console.log("todoEdit", todoEdit)
 todoEdit.addEventListener('click', (e)=>{
  e.preventDefault();
  const inputEdit = document.querySelector(`#input-edit${editIndex}`)
 console.log("btnEdit", inputEdit)
 editTodo(editIndex, inputEdit.value)
 renderTodo();
 })

   })
 }) 

 //Add Event Listener for delete each single book

 console.log("todoHtml", todoData)
 const removeBtn = document.querySelectorAll(".btn-remove")
 console.log(removeBtn)
 removeBtn.forEach((singleTodo)=>{
 singleTodo.addEventListener('click', ()=>{
 deleteTodo(singleTodo.getAttribute('id'))
     
   })
 }) 
}


const todoData = getTodo();

const renderTodo = () => {
  const todoData = getTodo();
  console.log("Data in render",todoData)
  todos.innerHTML = '';
    todoData.forEach((todo) => { 
      todoHtml(todo)
      });   
};

renderTodo();

todoAdd .addEventListener('keyup', (e)=>{
  if (e.key === 'Enter') {
    addTodo()
  }
  });

btnAdd.addEventListener('click', ()=>{
  addTodo()
  console.log(todoAdd.value)
  });


export {renderTodo, todoHtml}



