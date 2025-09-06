import Component from '../core/baseComponent.js';
import ListItemRead from '../listItemRead/listItemRead.js';

export default class ListItemEdit extends Component {
  constructor(parent, config) {
    super(parent, config, 'listItemEdit');
  }
  get self() {
    return document.querySelector(`#listItemEdit-${this.config.id}`);
  }
  addEventListeners() {
    this.saveBtn.addEventListener('click', () => {
      const val = this.input.value;
      const listItemRead = new ListItemRead(this.parent, {id: this.config.id, text: val});
      listItemRead.render();
      this.self.replaceWith(listItemRead.self);
    });

    this.input.addEventListener('keydown', ({key}) => {
      if (key === 'Enter' && this.input.value.length >= 3) {
        const val = this.input.value;
        const listItemRead = new ListItemRead(this.parent, {id: this.config.id, text: val});
        listItemRead.render();
        this.self.replaceWith(listItemRead.self);
      }
    });

    this.cancelBtn.addEventListener('click', () => {
      const listItemRead = new ListItemRead(this.parent, this.config);
      listItemRead.render();
      this.self.replaceWith(listItemRead.self);
    });
  }

  render() {
    this.parent.insertAdjacentHTML('beforeend', this.html);
    this.saveBtn = document.getElementById(`listItemEdit-${this.config.id}-save`);
    this.cancelBtn = document.getElementById(`listItemEdit-${this.config.id}-cancel`);
    this.input = document.getElementById(`listItemEdit-${this.config.id}-input`);
    this.addEventListeners();
  }
}
