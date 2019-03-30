function createStore(reducer) {
    let state;
    let listeners = [];
    function dispatch(action) {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    }
    let subscribe = (fn) => {
        listeners.push(fn);
        return () => {
            listeners = listeners.filter(listener => fn !== listener);
        }
    }
    dispatch({});
    let getState = () => state;
    return { getState, subscribe, dispatch }
};
function combineReducers(reducers) {
    return (state = {}, action) => {
        let newState = {};
        for (let key in reducers) {
            let s = reducers[key](state[key], action);
            newState[key] = s;
        };
        return newState;
    }
};
export { createStore, combineReducers }