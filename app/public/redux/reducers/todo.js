import {CREATE, DELETE, UPDATE} from '../consts/types.js';

const initialState = {
  id: 1,
  todos: [
    {id: 1, text: 'Walk the dog'},
    {id: 2, text: 'Water the plants'},
    {id: 3, text: 'Sand the chairs'},
  ],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE: {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.todos.length + 1,
            text: action.payload.text,
          },
        ],
      };
    }
    case DELETE: {
      return {
        ...state,
        todos: [...state.todos.filter(todo => todo.id !== action.payload.id)],
      };
    }
    case UPDATE: {
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
        ),
      };
    }
    default:
      return state;
  }
};
