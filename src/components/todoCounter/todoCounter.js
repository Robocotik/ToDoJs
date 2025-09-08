import Component from '../core/baseComponent.js';
import {store} from '../../redux/store.js';

export default class TodoCounter extends Component {
  constructor(parent, props) {
    super(parent, props, 'todoCounter');
  }

  get self() {
    return document.querySelector('#todoCounter');
  }

  addEventListeners() {
    store.subscribe(() => {
      this.self.textContent = store.getState().todos.length.toString();
    });
  }

  render() {
    this.parent.insertAdjacentHTML('beforeend', this.html({count: store.getState().todos.length}));
    this.addEventListeners();
  }
}
