import { REMOVE } from '../consts/types.js';
export const removeTodo = id => {
  return {
    type: REMOVE,
    payload: {
      id: id,
    },
  };
};
