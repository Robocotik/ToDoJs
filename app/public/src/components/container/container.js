import Component from '../core/baseComponent.js';

export default class Container extends Component {
  constructor(parent, props) {
    super(parent, props, 'container');
  }

  get self() {
    return document.querySelector('#todo__container');
  }

  render() {
    this.parent.insertAdjacentHTML('beforeend', this.html);
  }
}
