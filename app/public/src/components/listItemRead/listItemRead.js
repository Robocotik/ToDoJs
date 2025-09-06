import Component from '../core/baseComponent.js';
import ListItemEdit from '../listItemEdit/listItemEdit.js';
export default class ListItemRead extends Component {
  constructor(parent, props, state) {
    super(parent, props, 'listItemRead', state);
  }
  get self() {
    return document.querySelector(`#listItemRead-${this.props.id}`);
  }

  removeTodo() {
    this.self.remove();
  }

  addEventListeners() {
    this.deleteButton.addEventListener('click', () => {
      this.removeTodo();
    });

    this.span.addEventListener('dblclick', () => {
      const listItemEdit = new ListItemEdit(this.parent, this.props, this.state);
      listItemEdit.render();
      this.self.replaceWith(listItemEdit.self);
    });
  }

  randomNumber(max) {
    return Math.floor(Math.random() * max);
  }

  render() {
    this.parent.insertAdjacentHTML('beforeend', this.html);
    this.span = this.self.querySelector('.TODO-item__span-' + this.props.id);
    this.state = this.state
      ? this.state
      : `rgb(${this.randomNumber(256)}, ${this.randomNumber(256)}, ${this.randomNumber(256)})`;
    this.span.style.color = this.state;
    this.deleteButton = document.getElementById(`listItemRead-${this.props.id}-done`);
    this.addEventListeners();
  }
}
