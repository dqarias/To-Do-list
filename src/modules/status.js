import { getTodo, storeTodo } from './action.js';

const statusTodo = (checkboxTodo, todoId) => {
  const checkTodo = getTodo();
  if (checkboxTodo.checked) {
    checkTodo[todoId - 1].completed = true;
  } else {
    checkTodo[todoId - 1].completed = false;
  }
  storeTodo(checkTodo);
};

export default statusTodo;