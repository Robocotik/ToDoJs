import {INCREMENT, DECREMENT} from '../consts/types.js';

const initialState = 0

export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT: {
      return state + action.payload.count;
    }
    case DECREMENT: {
      return state - action.payload.count;
    }
    default:
      return state;
  }
};
