import {CREATE} from '../consts/todoActionTypes.js';

export const todoTransformer = store => next => action => {
  if (action.type === CREATE && action.payload.text === 'rip') {
    action.payload.text = 'kanev';
  }
  next(action);
};
