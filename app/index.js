import { todoListUsecase } from './public/src/components/todoList/todoList.usecase.js';
import TodoList from './public/src/components/todoList/todoList.js';

const root = document.getElementById('root');
const todoList = new TodoList(root, todoListUsecase);
todoList.render();

// const addTodoInput = document.getElementById('todo-input');
// const addTodoButton = document.getElementById('add-todo-btn');
// const TODOList = document.getElementById('TODO-list');

// addTodoInput.addEventListener('input', () => {
//   addTodoButton.disabled = addTodoInput.value.length < 3;
// });
// addTodoInput.addEventListener('keydown', ({key}) => {
//   if (key === 'Enter' && addTodoInput.value.length >= 3) {
//     addTodo();
//   }
// });

// addTodoButton.addEventListener('click', () => {
//   addTodo();
// });

// function removeTodo(index) {
//   TODO.splice(index, 1);
//   TODOList.removeChild(TODOList.childNodes[index]);
// }

// function addTodo() {
//   TODO.push(addTodoInput.value);
//   TODOList.append(renderTodoInReadMode(addTodoInput.value));

//   addTodoInput.value = '';
//   addTodoButton.disabled = true;
// }

// function updateTodo(index, description) {
//   TODO[index] = description;
//   const todo = renderTodoInReadMode(description);
//   TODOList.replaceChild(todo, TODOList.childNodes[index]);
// }
