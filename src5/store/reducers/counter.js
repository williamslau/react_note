import * as types from '../actions-types'
let initState = {
    number: 0
}
function reducer(state = initState, action) {
    switch (action.type) {
        case types.ADD:
            return { number: state.number + action.count };
        case types.MINUS:
            return { number: state.number - action.count };
        default:
            return state;
    }
}
export default reducer;
