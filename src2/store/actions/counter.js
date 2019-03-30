import * as types from '../action-types';

let actions = {
    add(count) {
        return {
            type: types.INCREMENT, count: count
        }
    }
}
export default actions;