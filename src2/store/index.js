import { createStore, combineReducers } from '../redux';
import counter from './reducers/counter'
let reducer = combineReducers({
    c:counter,
});
let store=createStore(reducer);

window.store=store;
export default store;