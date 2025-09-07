import {reducer} from '../reducers/index.js';
import {addTodo} from '../actionCreators/addTodo.js';
import {removeTodo} from '../actionCreators/removeTodo.js';

const createStore = reducer => {
  let state = reducer(undefined, {type: '__INIT__'});

  const getState = () => state;
  const dispatch = action => {
    state = reducer(state, action);
  };
  return {getState, dispatch};
};

const store = createStore(reducer);

console.log(store.getState());

store.dispatch(addTodo('New Task'));

console.log(store.getState());

store.dispatch(removeTodo(1));

console.log(store.getState());
