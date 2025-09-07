import {DECREMENT} from '../consts/types.js';

export const decrementCounter = (count) => {
  return {
    type: DECREMENT,
    payload: {
      count: count,
    },
  };
};
