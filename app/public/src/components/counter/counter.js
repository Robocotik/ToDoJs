import Component from '../core/baseComponent.js';
import {store} from '../../../redux/stores/index.js';
import {incrementCounter} from '../../../redux/actionCreators/increment.js';
import {decrementCounter} from '../../../redux/actionCreators/decrement.js';

export default class Counter extends Component {
  constructor(parent, props) {
    super(parent, props, 'counter');
  }

  get self() {
    return document.querySelector('#counter__container');
  }
  get incBtn() {
    return document.getElementById('counter__increment');
  }

  get decBtn() {
    return document.getElementById('counter__decrement');
  }

  get content() {
    return document.getElementById('counter__count');
  }

  updateContent() {
    this.content.textContent = store.getState().count;
  }

  addEventListeners() {
    this.incBtn.addEventListener('click', () => {
      store.dispatch(incrementCounter(1));
      this.updateContent();
    });

    this.decBtn.addEventListener('click', () => {
      store.dispatch(decrementCounter(1));
      this.updateContent();
    });
  }

  render() {
    this.parent.insertAdjacentHTML('beforeend', this.html({count: store.getState().count}));
    this.addEventListeners();
  }
}
