import {CREATE, UPDATE, DELETE} from '../consts/todoActionTypes.js';

export const addTodo = text => {
  return {
    type: CREATE,
    payload: {
      text: text,
    },
  };
};

export const updateTodo = (id, text) => {
  return {
    type: UPDATE,
    payload: {
      id: id,
      text: text,
    },
  };
};

export const removeTodo = id => {
  return {
    type: DELETE,
    payload: {
      id: id,
    },
  };
};
