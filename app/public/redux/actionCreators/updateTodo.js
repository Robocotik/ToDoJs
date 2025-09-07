import {UPDATE} from '../consts/types.js';

export const updateTodo = (id, text) => {
  return {
    type: UPDATE,
    payload: {
      id: id,
      text: text,
    },
  };
};
