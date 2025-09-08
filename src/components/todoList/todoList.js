import Component from '../core/baseComponent.js';
import ListItemRead from '../listItemRead/listItemRead.js';
import getRandomColor from '../../utils/getRandomColor.js';
import {addTodo as addTodoAction} from '../../redux/actionCreators/todoActions.js';
import {store} from '../../redux/store.js';

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
    const color = getRandomColor();
    const listItemRead = new ListItemRead(this.self, {
      id: store.getState().todos.length,
      text: store.getState().todos[store.getState().todos.length - 1].text,
      color: color,
    });
    listItemRead.render();
    this.addTodoInput.value = '';
    this.addTodoButton.disabled = true;
  }

  initTodoList(context) {
    const color = getRandomColor();
    const listItemRead = new ListItemRead(
      this.self,
      {text: context.text, id: context.id, color: color},
      this.state,
    );
    listItemRead.render();
  }

  render() {
    this.parent.insertAdjacentHTML('beforeend', this.html());
    this.addEventListeners();
    store.getState().todos.forEach(data => {
      this.initTodoList({...data});
    });
  }
}
