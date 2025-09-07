import {INCREMENT} from '../consts/types.js';

export const incrementCounter = (count) => {
  return {
    type: INCREMENT,
    payload: {
      count: count,
    },
  };
};
