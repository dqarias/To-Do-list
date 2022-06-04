import { getTodo, storeTodo } from './action.js';
const statusTodo = (checkboxTodo, todoId) => {
    console.log("Click on change")
    const checkTodo= getTodo();
    if(checkboxTodo.checked){
    console.log("consolet",checkTodo)
    console.log(checkTodo[todoId-1].completed)
    checkTodo[todoId-1].completed = true;
    console.log(checkTodo[todoId-1].completed)
    }else{
    console.log("consolef",checkTodo)
    console.log(checkTodo[todoId-1].completed)
    checkTodo[todoId-1].completed = false;
    }
    storeTodo(checkTodo);
   
  };

  export default statusTodo;