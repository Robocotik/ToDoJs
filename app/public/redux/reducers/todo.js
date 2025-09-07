import {ADD, REMOVE} from '../consts/types.js';

const initialState = {
  todos: [
    {id: 1, text: 'Walk the dog'},
    {id: 2, text: 'Water the plants'},
    {id: 3, text: 'Sand the chairs'},
  ],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD: {
      return {
        todos: [
          ...state.todos,
          {
            id: state.todos.length + 1,
            text: action.payload.text,
          },
        ],
      };
    }
    case REMOVE: {
      return {
        todos: [...state.todos.filter(todo => todo.id !== action.payload.id)],
      };
    }
    default:
      return state;
  }
};
