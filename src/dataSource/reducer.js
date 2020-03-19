
import { combineReducers } from 'redux'

import ProductsReducer from '../Components/ShowProducts/APIs/reducer'

 const rootReducer = combineReducers({
    ProductsReducer,
 })

 export default rootReducer;