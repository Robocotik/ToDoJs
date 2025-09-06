import Component from '../core/baseComponent.js';
import ListItemRead from '../listItemRead/listItemRead.js';

export default class TodoList extends Component {
  constructor(parent, props) {
    super(parent, props, 'todoList');
    this.countOfItems = 0;
    this.addTodoButton = document.getElementById('add-todo-btn');
    this.addTodoInput = document.getElementById('todo-input');
  }
  
  get self() {
    return document.querySelector(`#TODO-list-${this.props.id}`);
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
    this.countOfItems++;
    const listItemRead = new ListItemRead(this.self, {
      id: this.countOfItems,
      text: this.addTodoInput.value,
    });
    listItemRead.render();
    this.addTodoInput.value = '';
    this.addTodoButton.disabled = true;
  }

  render() {
    this.parent.insertAdjacentHTML('beforeend', this.html);

    this.addEventListeners();

    this.props.items.forEach(data => {
      const listItemRead = new ListItemRead(this.self, data);
      listItemRead.render();
      this.countOfItems++;
    });
  }
}
