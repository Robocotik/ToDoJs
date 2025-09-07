
import TodoList from './public/src/components/todoList/todoList.js';
import Container from './public/src/components/container/container.js';
import { store } from './public/redux/stores/index.js';

const root = document.getElementById('root');
const container = new Container(root);
container.render();

const todoContainer = document.getElementById('todo__container');
const todoList = new TodoList(todoContainer, {id: store.getState().id, dispatch: store.dispatch});
todoList.render(store);