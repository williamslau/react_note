import * as types from '../actions-types'
let actions = {
    add(count) {
        return { type: types.ADD, count: count }
    },
    minus(count) {
        return { type: types.MINUS, count: count }
    }
}
export default actions;