import {ACTION} from './constants'

export const fetchProducts = (data) => {
    return dispatch => {
        dispatch({
            type: ACTION.SHOW_PRODUCTS,
            data,
        })
    }
}