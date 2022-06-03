import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import './style.css';

import {
  addTodo, editTodo, deleteTodo, getTodo,
} from './modules/action.js';

const todos = document.querySelector('.todos__list');
const btnAdd = document.querySelector('#btn-add');
const todoAdd = document.querySelector('#todo-add');

const todoHtml = (todo) => {
  todos.innerHTML += `<li id="${todo.index}" class="todo_list">
  <div>
     <input type="checkbox" id="todo${todo.index}" name="todo${todo.index}">
     <label for="todo${todo.index}">${todo.description}</label>
  </div>
  <button id="${todo.index}" class="btn btn-remove">
     <i class="fa-solid fa-trash"></i>
  </button>
 </li>`;

  // Add Event Listener for edit each single book

  const todoList = document.querySelectorAll('.todo_list');
  todoList.forEach((singleTodo) => {
    singleTodo.addEventListener('dblclick', () => {
      const editSingleTodo = getTodo();
      const editIndex = singleTodo.getAttribute('id');
      singleTodo.innerHTML = `
 <li class= "edit_list" id= "edit${editIndex}"> 
       <div>
       <i class="icon fa-solid fa-check"></i>
         <input class="edit_list-input" id="input-edit${editIndex}" type="text"  value="${editSingleTodo[editIndex - 1].description}">
       </div>
       <button id="btn-edit${editIndex}" type ="submit" class="btn" > <i class="fa-solid fa-pen"></i></button>
</li>
 `;

      const todoEdit = document.querySelector(`#btn-edit${editIndex}`);
      todoEdit.addEventListener('click', (e) => {
        e.preventDefault();
        const inputEdit = document.querySelector(`#input-edit${editIndex}`);
        editTodo(editIndex, inputEdit.value);
        renderTodo();
      });
    });
  });

  // Add Event Listener for delete each single book
  const removeBtn = document.querySelectorAll('.btn-remove');
  removeBtn.forEach((singleTodo) => {
    singleTodo.addEventListener('click', () => {
      deleteTodo(singleTodo.getAttribute('id'));
    });
  });
};

const renderTodo = () => {
  const todoData = getTodo();
  todos.innerHTML = '';
  todoData.forEach((todo) => {
    todoHtml(todo);
  });
};

renderTodo();

todoAdd.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    addTodo();
  }
});

btnAdd.addEventListener('click', () => {
  addTodo();
});

export { renderTodo, todoHtml };
