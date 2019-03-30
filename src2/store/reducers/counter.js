import * as types from '../action-types'

let initState = { number: 0 };

function reducer(state = initState, action) {
    switch (action.type) {
        case types.INCREMENT:
            return { number: state.number + action.count }
        default:
            return state;
    }
}
export default reducer;