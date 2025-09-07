import {ADD} from '../consts/types.js';
export const addTodo = (text) => {
  return {
    type: ADD,
    payload: {
      text: text,
    },
  };
};
