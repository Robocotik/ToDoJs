export const selectTodos = state => state.todos;
export const selectTodosLength = state => state.todos.length;
export const selectTodoTextById = (state, id) => state.todos.find(todo => todo.id === id).text;