import { renderTodo, todoHtml } from '../index.js';
import Todo from './todo.js';

const todoAdd = document.querySelector('#todo-add');

const getTodo = () => {
  const todoData = localStorage.getItem('todoData');
  if (todoData) {
    return JSON.parse(todoData);
  }
  return [];
};

const storeTodo = (store) => {
  localStorage.setItem('todoData', JSON.stringify(store));
};

const addTodo = () => {
  if (todoAdd.value) {
    const todoData = getTodo();
    const todo = new Todo(todoData.length + 1, todoAdd.value, false);
    todoHtml(todo);
    todoData.push(todo);
    storeTodo(todoData);
    todoAdd.value = '';
  }
};

const editTodo = (index, value) => {
  const todoDataEdit = getTodo();
  todoDataEdit[index - 1].description = value;
  storeTodo(todoDataEdit);
};

const deleteTodo = (index) => {
  const Todos = getTodo();
  const todoDataRemoved = Todos.filter((task) => task.index !== Number(index));
  todoDataRemoved.forEach((task, index) => {
    task.index = index + 1;
  });
  storeTodo(todoDataRemoved);
  renderTodo();
};

const deleteAllTodo = () => {
  const Todo = getTodo();
  const todoDataRemoved = Todo.filter((task) => task.completed === false);
  todoDataRemoved.forEach((task, index) => {
    task.index = index + 1;
  });
  storeTodo(todoDataRemoved);
  renderTodo();
};

export {
  addTodo, deleteTodo, editTodo, getTodo, storeTodo, deleteAllTodo,
};
