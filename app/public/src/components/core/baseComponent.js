/**
 * Базовый класс компонентов
 * @class
 * @param {HTMLElement} parent - Родительский элемент, в который будет вставлен компонент.
 * @param {Object} props - Объект с конфигурацией компонента.
 * @param {string} templateName - Название шаблона компонента(hbs).
 */
export default class Component {
  constructor(parent, props, templateName) {
    this.parent = parent;
    this.props = props;
    this.templateName = templateName;
  }
  
  get self() {
    return document.getElementById(this.props.id);
  }

  get html() {
    return Handlebars.templates[`${this.templateName}.hbs`](this.props);
  }
}
