import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import './style.css';

const todos = document.querySelector('.todos__list')

const todoData = [
    {
        description: "Drag and drop to reorder your list",
        completed: true,
        index: 1,
    },
    {
        description: "Manage all your lists in one place",
        completed: false,
        index: 1,
    },
    {
        description: "Resync to clear out the old",
        completed: true,
        index: 1,
    }
]

const renderData = () => {
    todoData.forEach((todo)=>{
    /* todos.innerHTML += ` <li class="todo__list">
        <input type="checkbox" id="todo${todo.index}" name="todo${todo.index}">
        <label for="todo${todo.index}">${todo.description}</label> 
        <i class="fa-solid fa-ellipsis-vertical"></i>
    </li>`   */
    const todoList = document.createElement('li')
    const checkbox = document.createElement('div')
    const inputTodo = document.createElement('input')
    const labelTodo = document.createElement('label')
    const btnTodo = document.createElement('button')
    todoList.classList.add('todo_list')
    inputTodo.setAttribute('type','checkbox')
    inputTodo.setAttribute('id',`todo${todo.index}`)
    inputTodo.setAttribute('name', `todo${todo.index}`)
    if (todo.completed){
    inputTodo.setAttribute('checked', true)  
    }
    labelTodo.setAttribute('for', `todo${todo.index}`)
    labelTodo.innerHTML = `${todo.description}`
    btnTodo.classList.add('btn')
    btnTodo.innerHTML = `<i class="fa-solid fa-ellipsis-vertical"></i>`

    checkbox.appendChild(inputTodo)
    checkbox.appendChild(labelTodo)
    todoList.appendChild(checkbox)
    todoList.appendChild(btnTodo)

    todos.appendChild(todoList) 

    })
}

renderData();
