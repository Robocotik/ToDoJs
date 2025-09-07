import Component from '../core/baseComponent.js';
import ListItemRead from '../listItemRead/listItemRead.js';
import getRandomColor from '../../../utils/getRandomColor.js';
import {addTodo as addTodoAction} from '../../../redux/actionCreators/addTodo.js';
export default class TodoList extends Component {
  constructor(parent, props) {
    super(parent, props, 'todoList');
  }

  get self() {
    return document.querySelector(`#TODO-list-${this.props.id}`);
  }

  get addTodoInput() {
    return document.getElementById('todo-input');
  }

  get addTodoButton() {
    return document.getElementById('add-todo-btn');
  }

  addEventListeners(context) {
    this.addTodoButton.addEventListener('click', () => {
      this.addTodo(context);
    });
    this.addTodoInput.addEventListener('input', () => {
      this.addTodoButton.disabled = this.addTodoInput.value.length < 3;
    });
    this.addTodoInput.addEventListener('keydown', ({key}) => {
      if (key === 'Enter' && this.addTodoInput.value.length >= 3) {
        this.addTodo(context);
      }
    });
  }

  addTodo(context) {
    this.props.dispatch(addTodoAction(this.addTodoInput.value));
    const color = getRandomColor();
    const listItemRead = new ListItemRead(this.self, {
      id: context.getState().todos.length,
      dispatch: this.props.dispatch,
    });
    listItemRead.render({
      id: context.getState().todos.length,
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

  render(context) {
    this.parent.insertAdjacentHTML('beforeend', this.html(context.getState()));
    this.addEventListeners(context);
    context.getState().todos.forEach(data => {
      this.initTodoList({...data, dispatch: this.props.dispatch});
    });
  }
}
