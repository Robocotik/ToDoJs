import Component from '../core/baseComponent.js';
import ListItemEdit from '../listItemEdit/listItemEdit.js';
export default class ListItemRead extends Component {
  constructor(parent, config) {
    super(parent, config, 'listItemRead');
  }
  get self() {
    return document.querySelector(`#listItemRead-${this.config.id}`);
  }

  removeTodo() {
    this.self.remove();
  }

  addEventListeners() {
    this.deleteButton.addEventListener('click', () => {
      this.removeTodo();
    });

    this.span.addEventListener('dblclick', () => {
      const listItemEdit = new ListItemEdit(this.parent, this.config);
      listItemEdit.render()
      this.self.replaceWith(listItemEdit.self);
    });
  }

  render() {
    this.parent.insertAdjacentHTML('beforeend', this.html);
    this.span = this.self.querySelector('.TODO-item__span-' + this.config.id);
    this.deleteButton = document.getElementById(`listItemRead-${this.config.id}-done`);
    this.addEventListeners();
  }
}
