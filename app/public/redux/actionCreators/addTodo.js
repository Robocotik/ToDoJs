import {CREATE} from '../consts/types.js';

export const addTodo = (text) => {
  return {
    type: CREATE,
    payload: {
      text: text,
    },
  };
};
