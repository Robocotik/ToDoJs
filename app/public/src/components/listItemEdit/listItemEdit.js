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
    return document.getElementById(`listItemEdit-${this.props.id}-save`);
  }

  get cancelBtn() {
    return document.getElementById(`listItemEdit-${this.props.id}-cancel`);
  }

  get input() {
    return document.getElementById(`listItemEdit-${this.props.id}-input`);
  }

  addEventListeners() {
    this.saveBtn.addEventListener('click', () => {
      const val = this.input.value;
      const listItemRead = new ListItemRead(
        this.parent,
        {id: this.props.id, text: val},
        this.state,
      );
      listItemRead.render();
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
        listItemRead.render();
        this.self.replaceWith(listItemRead.self);
      }
    });

    this.cancelBtn.addEventListener('click', () => {
      const listItemRead = new ListItemRead(this.parent, this.props, this.state);
      listItemRead.render();
      this.self.replaceWith(listItemRead.self);
    });
  }

  render() {
    this.parent.insertAdjacentHTML('beforeend', this.html);
    this.input.style.color = this.state.color;
    this.addEventListeners();
  }
}
