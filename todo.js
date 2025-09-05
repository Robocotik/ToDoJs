// Состояние приложения
const TODO = ['Walk the dog', 'Water the plants', 'Sand the chairs'];
// Ссылки на HTML-элементы
const addTodoInput = document.getElementById('todo-input');
const addTodoButton = document.getElementById('add-todo-btn');
const TODOList = document.getElementById('TODO-list');
const DoneBtn = document.getElementById('done-btn');
for (const todo of TODO) {
  TODOList.append(renderTodoInReadMode(todo));
}
addTodoInput.addEventListener('input', () => {
  addTodoButton.disabled = addTodoInput.value.length < 3;
});
addTodoInput.addEventListener('keydown', ({key}) => {
  if (key === 'Enter' && addTodoInput.value.length >= 3) {
    addTodo();
  }
});

addTodoButton.addEventListener('click', () => {
  addTodo();
});

function removeTodo(index) {
  TODO.splice(index, 1);
  TODOList.removeChild(TODOList.childNodes[index]);
}

function addTodo() {
  TODO.push(addTodoInput.value);
  TODOList.append(renderTodoInReadMode(addTodoInput.value));

  addTodoInput.value = '';
  addTodoButton.disabled = true;
}

function updateTodo(index, description) {
  TODO[index] = description;
  const todo = renderTodoInReadMode(description);
  TODOList.replaceChild(todo, TODOList.childNodes[index]);
}

function renderTodoInReadMode(todo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = todo;
  span.addEventListener('dblclick', () => {
    const idx = TODO.indexOf(todo);
    TODOList.replaceChild(renderTodoInEditMode(todo), TODOList.childNodes[idx]);
  });
  li.append(span);
  const button = document.createElement('button');
  button.textContent = 'Done';
  button.addEventListener('click', () => {
    const idx = TODO.indexOf(todo);
    removeTodo(idx);
  });
  li.append(button);
  return li;
}

function renderTodoInEditMode(todo) {
  const li = document.createElement('li');
  const input = document.createElement('input');
  input.type = 'text';
  input.value = todo;
  li.append(input);
  const saveBtn = document.createElement('button');
  saveBtn.textContent = 'Save';
  saveBtn.addEventListener('click', () => {
    const idx = TODO.indexOf(todo);
    updateTodo(idx, input.value);
  });
  li.append(saveBtn);
  const cancelBtn = document.createElement('button');
  cancelBtn.textContent = 'Cancel';
  cancelBtn.addEventListener('click', () => {
    const idx = TODO.indexOf(todo);
    TODOList.replaceChild(renderTodoInReadMode(todo), TODOList.childNodes[idx]);
  });
  li.append(cancelBtn);
  return li;
}
