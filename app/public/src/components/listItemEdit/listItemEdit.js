import Component from '../core/baseComponent.js';
import ListItemRead from '../listItemRead/listItemRead.js';

export default class ListItemEdit extends Component {
  constructor(parent, props, state) {
    super(parent, props, 'listItemEdit', state);
  }

  get self() {
    return document.querySelector(`#listItemEdit-${this.props.id}`);
  }
  get saveBtn() {
    console.log(this.props.id);
    return document.getElementById(`listItemEdit-${this.props.id}-save`);
  }

  get cancelBtn() {
    return document.getElementById(`listItemEdit-${this.props.id}-cancel`);
  }

  get input() {
    return document.getElementById(`listItemEdit-${this.props.id}-input`);
  }

  addEventListeners(context) {
    this.saveBtn.addEventListener('click', () => {
      const val = this.input.value;
      const listItemRead = new ListItemRead(
        this.parent,
        {id: this.props.id, text: val},
        this.state,
      );
      listItemRead.render({text: val, id: this.props.id, color: context.color});
      this.self.replaceWith(listItemRead.self);
    });

    this.input.addEventListener('keydown', ({key}) => {
      if (key === 'Enter' && this.input.value.length >= 3) {
        const val = this.input.value;
        const listItemRead = new ListItemRead(
          this.parent,
          {id: this.props.id, text: val},
          this.state,
        );
        listItemRead.render({id: this.props.id, text: val, color: context.color});
        this.self.replaceWith(listItemRead.self);
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
