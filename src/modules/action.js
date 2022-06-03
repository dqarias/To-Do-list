import {renderTodo, todoHtml} from '../index.js'
import Todo from './todo.js'

const todoAdd = document.querySelector('#todo-add');

const getTodo = () => {
    const todoData = localStorage.getItem('todoData')
    if(todoData){
     return JSON.parse(todoData);
    } else {
     return [];
    }
   }
  
  const storeTodo = (store) => {
    localStorage.setItem('todoData', JSON.stringify(store));
  }

  const addTodo = () => {

    if(todoAdd.value){
    const todoData = getTodo();
    const todo = new Todo(todoData.length + 1, todoAdd.value, false)
    todoHtml(todo)
    todoData.push(todo);
    console.log("todo Data ADD",todoData)
    storeTodo(todoData);
    todoAdd.value='';
    } else {
      console.log("The input is empty please try again ")
    }
  }

  const editTodo = (index, value) => {
    const todoDataEdit = getTodo();
    todoDataEdit[index-1].description = value;
    storeTodo(todoDataEdit)
  } 

  const deleteTodo = (index) =>{
    const li = document.getElementById(`todos${index}`);
    let Todos = getTodo();
    const todoDataRemoved = Todos.filter(task => task.index !== Number(index));
    todoDataRemoved.forEach((task,index) => {
      task.index = index + 1;
    }); 
    console.log("Sorting Ids",todoDataRemoved)
    storeTodo(todoDataRemoved)
    renderTodo()
    //li.remove();
  }


export  {addTodo, deleteTodo, editTodo, getTodo, storeTodo}

  