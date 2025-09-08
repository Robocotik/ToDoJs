import Component from '../core/baseComponent.js';
import ListItemRead from '../listItemRead/listItemRead.js';
import {updateTodo as updateTodoAction} from '../../redux/actionCreators/todoActions.js';
import {store} from '../../redux/store.js';

export default class ListItemEdit extends Component {
  constructor(parent, props, state) {
    super(parent, props, 'listItemEdit', state);
  }

  get self() {
    return document.querySelector(`#listItemEdit-${this.props.id}`);
  }
  get saveBtn() {
    return document.getElementById(`listItemEdit-${this.props.id}-save`);
  }

  get cancelBtn() {
    return document.getElementById(`listItemEdit-${this.props.id}-cancel`);
  }

  get input() {
    return document.getElementById(`listItemEdit-${this.props.id}-input`);
  }

  updateTodo() {
    store.dispatch(updateTodoAction(this.props.id, this.input.value));
    const val = this.input.value;
    const listItemRead = new ListItemRead(
      this.parent,
      {id: this.props.id, text: val, color: this.props.color},
      this.state,
    );
    listItemRead.render();
    this.self.replaceWith(listItemRead.self);
  }

  addEventListeners() {
    this.saveBtn.addEventListener('click', () => {
      this.updateTodo();
    });

    this.input.addEventListener('keydown', ({key}) => {
      if (key === 'Enter' && this.input.value.length >= 3) {
        this.updateTodo();
      }
    });

    this.cancelBtn.addEventListener('click', () => {
      const listItemRead = new ListItemRead(
        this.parent,
        {text: this.props.text, id: this.props.id, color: this.props.color},
        this.state,
      );

      listItemRead.render();
      this.self.replaceWith(listItemRead.self);
    });
  }

  render() {
    this.parent.insertAdjacentHTML(
      'beforeend',
      this.html({text: this.props.text, id: this.props.id, color: this.props.color}),
    );
    this.input.value = this.props.text;
    this.addEventListeners();
  }
}
