import {todoReducer} from './todoReducer.js';
import { countReducer } from './counterReducer.js';

export const reducer = (state = {}, action) => {
  return {
    todos: todoReducer(state.todos, action),
    count: countReducer(state.count, action),
  };
};

function combineReducers(reducersMap) {
  return function combinationReducer(state, action) {
    const nextState = {};
    Object.entries(reducersMap).forEach(([key, reducer]) => {
      nextState[key] = reducer(state[key], action);
    });
    return nextState;
  };
}
