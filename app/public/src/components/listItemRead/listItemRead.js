import Component from '../core/baseComponent.js';
import ListItemEdit from '../listItemEdit/listItemEdit.js';
export default class ListItemRead extends Component {
  constructor(parent, props) {
    super(parent, props, 'listItemRead');
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
      const listItemEdit = new ListItemEdit(this.parent, this.props);
      listItemEdit.render();
      this.self.replaceWith(listItemEdit.self);
    });
  }

  render() {
    this.parent.insertAdjacentHTML('beforeend', this.html);
    this.span = this.self.querySelector('.TODO-item__span-' + this.props.id);
    this.deleteButton = document.getElementById(`listItemRead-${this.props.id}-done`);
    this.addEventListeners();
  }
}
