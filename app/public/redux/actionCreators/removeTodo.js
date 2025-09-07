import { DELETE } from '../consts/types.js';

export const removeTodo = id => {
  return {
    type: DELETE,
    payload: {
      id: id,
    },
  };
};
