import Component from '../core/baseComponent.js';
import ListItemRead from '../listItemRead/listItemRead.js';
import getRandomColor from '../../../utils/getRandomColor.js';
export default class TodoList extends Component {
  constructor(parent, props) {
    super(parent, props, 'todoList', {counter: 0});
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
    this.setState({counter: this.state.counter + 1});
    const listItemRead = new ListItemRead(this.self, {
      id: this.state.counter,
      text: this.addTodoInput.value,
    });
    listItemRead.render({
      ...this.state,
      id: this.state.counter,
      text: this.addTodoInput.value,
      color: context.color,
    });
    this.addTodoInput.value = '';
    this.addTodoButton.disabled = true;
  }

  render(context) {
    this.parent.insertAdjacentHTML('beforeend', this.html(context));

    this.addEventListeners(context);
    context.items.forEach(data => {
      const listItemRead = new ListItemRead(this.self, data);
      listItemRead.render({...data, color: getRandomColor()});
    });
  }
}
