import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise';

// let store = createStore(reducers);
// function thunk({ dispatch, getState }) {
//     return function (next) {
//         return function (action) {
//             if (typeof action === 'function') {
//                 action(dispatch, getState);
//             } else {
//                 next(action);
//             }
//         }
//     }
// }
let store = createStore(reducers, applyMiddleware(thunk,logger,promise))
window.store = store;
export default store;