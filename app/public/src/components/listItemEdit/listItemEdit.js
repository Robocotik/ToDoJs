import Component from '../core/baseComponent.js';
import ListItemRead from '../listItemRead/listItemRead.js';
import { updateTodo as updateTodoAction } from '../../../redux/actionCreators/updateTodo.js';
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

  updateTodo(context) {
    this.props.dispatch(updateTodoAction(this.props.id, this.input.value));
    const val = this.input.value;
    const listItemRead = new ListItemRead(this.parent, {id: this.props.id, text: val, dispatch: this.props.dispatch}, this.state);
    listItemRead.render({text: val, id: this.props.id, color: context.color});
    this.self.replaceWith(listItemRead.self);
  }

  addEventListeners(context) {
    this.saveBtn.addEventListener('click', () => {
      this.updateTodo(context);
    });

    this.input.addEventListener('keydown', ({key}) => {
      if (key === 'Enter' && this.input.value.length >= 3) {
        this.updateTodo(context);
      }
    });

    this.cancelBtn.addEventListener('click', () => {
      const listItemRead = new ListItemRead(this.parent, this.props, this.state);

      listItemRead.render({...this.props, color: context.color});
      this.self.replaceWith(listItemRead.self);
    });
  }

  render(context) {
    this.parent.insertAdjacentHTML('beforeend', this.html(context));
    this.addEventListeners(context);
  }
}
