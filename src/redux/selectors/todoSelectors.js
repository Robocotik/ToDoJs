export const selectTodos = state => state.todos;
export const selectTodosLength = state => state.todos.length;
export const selectTodoLast = state => state.todos[state.todos.length - 1];
export const selectTodoTextByTodo = (state, todo) => state.todos.find(t => t.id === todo.id).text;