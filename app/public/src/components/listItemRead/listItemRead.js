import Component from '../core/baseComponent.js';
import ListItemEdit from '../listItemEdit/listItemEdit.js';
import { removeTodo as removeTodoAction } from '../../../redux/actionCreators/removeTodo.js';
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
    this.props.dispatch(removeTodoAction(this.props.id));
  }

  addEventListeners(context) {
    this.deleteButton.addEventListener('click', () => {
      this.removeTodo();
    });

    this.span.addEventListener('dblclick', () => {
      const listItemEdit = new ListItemEdit(this.parent, {...this.props, dispatch: this.props.dispatch}, this.state);
      listItemEdit.render({...this.props, color: context.color});
      this.self.replaceWith(listItemEdit.self);
    });
  }

  render(context) {
    this.parent.insertAdjacentHTML('beforeend', this.html(context));
    this.addEventListeners(context);
  }
}
