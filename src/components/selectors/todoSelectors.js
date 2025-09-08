export const selectTodos = state => state.todos;
export const deleteTodo = id => state => state.todos.filter(todo => todo.id !== id);
export const selectTodosLength = state => state.todos.length;
export const selectTodoTextById = (state, id) => state.todos.find(todo => todo.id === id).text;