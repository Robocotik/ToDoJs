/**
 * Базовый класс компонентов
 * @class
 * @param {HTMLElement} parent - Родительский элемент, в который будет вставлен компонент.
 * @param {Object} config - Объект с конфигурацией компонента.
 * @param {string} templateName - Название шаблона компонента(hbs).
 */
export default class Component {
  constructor(parent, config, templateName) {
    this.parent = parent;
    this.config = config;
    this.templateName = templateName;
  }
  get self() {
    return document.getElementById(this.config.id);
  }
  get html() {
    return Handlebars.templates[`${this.templateName}.hbs`](this.config);
  }
}
