import { createStore } from 'redux';
import todos from './reducers';

let store = createStore(todos);
export default store;