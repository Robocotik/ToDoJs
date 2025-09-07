import {todoReducer} from './todo.js';

export const reducer = (state, action) => {
  return {
    ...todoReducer(state, action),
  };
};
