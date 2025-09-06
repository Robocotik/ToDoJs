import Component from '../core/baseComponent.js';
import ListItemEdit from '../listItemEdit/listItemEdit.js';
export default class ListItemRead extends Component {
  constructor(parent, props, state) {
    super(parent, props, 'listItemRead', state);
  }
  get self() {
    return document.querySelector(`#listItemRead-${this.props.id}`);
  }

  get span() {
    return document.querySelector('#TODO-item__span-' + this.props.id);
  }

  get deleteButton() {
    return document.getElementById(`listItemRead-${this.props.id}-done`);
  }

  removeTodo() {
    this.self.remove();
  }

  addEventListeners(context) {
    this.deleteButton.addEventListener('click', () => {
      this.removeTodo();
    });

    this.span.addEventListener('dblclick', () => {
      const listItemEdit = new ListItemEdit(this.parent, this.props, this.state);
      listItemEdit.render({...this.props, color: context.color});
      this.self.replaceWith(listItemEdit.self);
    });
  }

  render(context) {
    this.parent.insertAdjacentHTML('beforeend', this.html(context));
    this.addEventListeners(context);
  }
}
