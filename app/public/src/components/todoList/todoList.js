import Component from '../core/baseComponent.js';
import ListItemRead from '../listItemRead/listItemRead.js';
import getRandomColor from '../../../utils/getRandomColor.js';
import {addTodo as addTodoAction} from '../../../redux/actionCreators/addTodo.js';
import {store} from '../../../redux/stores/index.js';

export default class TodoList extends Component {
  constructor(parent, props) {
    super(parent, props, 'todoList');
  }

  get self() {
    return document.querySelector(`#TODO-list`);
  }

  get addTodoInput() {
    return document.getElementById('todo-input');
  }

  get addTodoButton() {
    return document.getElementById('add-todo-btn');
  }

  addEventListeners() {
    this.addTodoButton.addEventListener('click', () => {
      this.addTodo();
    });
    this.addTodoInput.addEventListener('input', () => {
      this.addTodoButton.disabled = this.addTodoInput.value.length < 3;
    });
    this.addTodoInput.addEventListener('keydown', ({key}) => {
      if (key === 'Enter' && this.addTodoInput.value.length >= 3) {
        this.addTodo();
      }
    });
  }

  addTodo() {
    store.dispatch(addTodoAction(this.addTodoInput.value));
    console.log(store.getState());
    const color = getRandomColor();
    const listItemRead = new ListItemRead(this.self, {
      id: store.getState().todos.length,
    });
    listItemRead.render({
      id: store.getState().todos.length,
      text: this.addTodoInput.value,
      color: color,
    });
    this.addTodoInput.value = '';
    this.addTodoButton.disabled = true;
  }

  initTodoList(context) {
    const color = getRandomColor();
    const listItemRead = new ListItemRead(this.self, context);
    listItemRead.render({...context, color: color});
  }

  render() {
    this.parent.insertAdjacentHTML('beforeend', this.html(store.getState()));
    this.addEventListeners();
    store.getState().todos.forEach(data => {
      this.initTodoList({...data});
    });
  }
}
