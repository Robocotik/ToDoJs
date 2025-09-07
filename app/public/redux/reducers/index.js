import {todoReducer} from './todo.js';

export const reducer = (state, action) => {
  return {
    todos: todoReducer(state, action).todos,
  };
};
