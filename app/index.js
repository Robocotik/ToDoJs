import {todoListUsecase} from './public/src/components/todoList/todoList.usecase.js';
import TodoList from './public/src/components/todoList/todoList.js';
import Container from './public/src/components/container/container.js';

const root = document.getElementById('root');
const container = new Container(root);
container.render();

const todoContainer = document.getElementById('todo__container');
const todoList = new TodoList(todoContainer, {id: todoListUsecase.id});
todoList.render(todoListUsecase);
