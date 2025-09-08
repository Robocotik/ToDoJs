import {INCREMENT, DECREMENT} from '../consts/counterActionTypes.js';

export const incrementCounter = (count) => {
  return {
    type: INCREMENT,
    payload: {
      count: count,
    },
  };
};

export const decrementCounter = count => {
  return {
    type: DECREMENT,
    payload: {
      count: count,
    },
  };
};
