import Component from '../core/baseComponent.js';
import {store} from '../../redux/store.js';
import {selectTodosLength} from '../selectors/index.js';

export default class TodoCounter extends Component {
  constructor(parent, props) {
    super(parent, props, 'todoCounter');
  }

  get self() {
    return document.querySelector('#todoCounter');
  }

  addEventListeners() {
    store.subscribe(() => {
      this.self.textContent = selectTodosLength(store.getState()).toString();
    });
  }

  render() {
    this.parent.insertAdjacentHTML(
      'beforeend',
      this.html({count: selectTodosLength(store.getState())}),
    );
    this.addEventListeners();
  }
}
