
import TodoList from './public/src/components/todoList/todoList.js';
import Container from './public/src/components/container/container.js';
import TodoCounter from './public/src/components/todoCounter/todoCounter.js';
import Counter from './public/src/components/counter/counter.js';

const root = document.getElementById('root');
const container = new Container(root);
container.render();

const counter = new Counter(root);
counter.render();

const todoCounter = new TodoCounter(root);
todoCounter.render();

const todoContainer = document.getElementById('todo__container');
const todoList = new TodoList(todoContainer);
todoList.render();