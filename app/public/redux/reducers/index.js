import {todoReducer} from './todo.js';
import { countReducer } from './counter.js';

export const reducer = (state = {}, action) => {
  return {
    todos: todoReducer(state.todos, action),
    count: countReducer(state.count, action),
  };
};
