import * as types from '../action-types';
let initState = {
    number: 0
}
export default function (state = initState, action) {
	console.log(action);
    switch (action.type) {
        case types.ADD:
            return { number: state.number + action.count };
        case types.MINUS:
            return { number: state.number - action.count };
        default:
            return state;
    }
}