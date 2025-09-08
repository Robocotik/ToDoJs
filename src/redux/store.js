import {reducer} from './reducers/index.js';
import {middlewares} from './middlewares/index.js';

function applyMiddleware(middleware) {
  return function createStoreWithMiddleware(createStore) {
    return (reducer, state) => {
      const store = createStore(reducer, state);

      return {
        dispatch: action => middleware(store)(store.dispatch)(action),
        getState: store.getState,
        subscribe: store.subscribe,
      };
    };
  };
}

const createStore = reducer => {
  let state = reducer(undefined, {type: '__INIT__'});
  let subscribes = [];
  const getState = () => state;
  const dispatch = action => {
    state = reducer(state, action);
    subscribes.forEach(listener => listener());
  };
  const subscribe = listener => {
    subscribes.push(listener);
  };
  return {getState, dispatch, subscribe};
};

const initialState = {
  todos: [
    {id: 1, text: 'Walk the dog'},
    {id: 2, text: 'Water the plants'},
    {id: 3, text: 'Sand the chairs'},
  ],
  count: 0,
};

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
export const store = createStoreWithMiddleware(reducer, initialState);
