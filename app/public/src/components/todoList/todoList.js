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
    this.setState({counter: this.state.counter + 1});
    const listItemRead = new ListItemRead(this.self, {
      id: this.state.counter,
      text: this.addTodoInput.value,
    });
    listItemRead.render();
    this.addTodoInput.value = '';
    this.addTodoButton.disabled = true;
  }

  render() {
    this.parent.insertAdjacentHTML('beforeend', this.html());

    this.addEventListeners();

    this.props.items.forEach(data => {
      const listItemRead = new ListItemRead(this.self, data, {
        color: getRandomColor(),
      });
      listItemRead.render();
      this.setState({counter: this.state.counter + 1});
    });
  }
}
