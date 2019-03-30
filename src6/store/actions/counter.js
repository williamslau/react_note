
import * as types from '../actions-type';
let actions = {
    add(count) {
        return { type: types.ADD, count }
    },
    minus(count) {
        return { type: types.MINUS, count }
    },
    thunk(count) {
        return function (dispatch, getState) {
            setTimeout(function () {
                dispatch({ type: types.ADD, count });
            }, 1000);
        }
    },
    promise(count) {
        return new Promise(function (resolve, reject) {
            if (Math.random() > 0.5) {
                setTimeout(function () {
                    resolve({ type: types.ADD, count });
                }, 1000)
            } else {
                setTimeout(function () {
                    reject({ type: types.MINUS, count });
                }, 1000);
            }
        });
    }
}
export default actions;