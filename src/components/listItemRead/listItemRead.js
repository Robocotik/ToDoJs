import Component from '../core/baseComponent.js';
import ListItemEdit from '../listItemEdit/listItemEdit.js';
import {removeTodo as removeTodoAction} from '../../redux/actionCreators/todoActions.js';
import {store} from '../../redux/store.js';

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
    store.dispatch(removeTodoAction(this.props.id));
  }

  addEventListeners() {
    this.deleteButton.addEventListener('click', () => {
      this.removeTodo();
    });

    this.span.addEventListener('dblclick', () => {
      const listItemEdit = new ListItemEdit(
        this.parent,
        {text: this.props.text, id: this.props.id, color: this.props.color},
        this.state,
      );
      listItemEdit.render();
      this.self.replaceWith(listItemEdit.self);
    });
  }

  render() {
    this.parent.insertAdjacentHTML(
      'beforeend',
      this.html({text: this.props.text, id: this.props.id, color: this.props.color}),
    );
    this.addEventListeners();
  }
}
