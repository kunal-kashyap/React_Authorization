 import {actions} from './constants'
 
 const initialState = {
     someArray: [],
 }

 const rootReducer = (state = initialState, action) => {
    if(action.type === actions.DO_SOMETHING){
       return {...state, didSomething: action.params} 
    }
    else{
        return state
    }
 }

 export default rootReducer;