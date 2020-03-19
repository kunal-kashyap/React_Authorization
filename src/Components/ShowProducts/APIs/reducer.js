import get from 'lodash/get';

import {ACTION} from './constants'

export default function ProductsReducer(state = {name: "kunal"}, action){
    switch(action.type) {
        case ACTION.SHOW_PRODUCTS:
            return { ...state, productsList: get(action,'data', [])}

        default:
            return state;
    }

}