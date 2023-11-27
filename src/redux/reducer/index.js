import { productCartReducer, productCategories, productReducer, selectedProductReducer } from './reducer';
import {combineReducers} from 'redux'

const reducer = combineReducers({
    allProducts : productReducer,
    product : selectedProductReducer,
    cartInProducts : productCartReducer,
    productCategories : productCategories
})

export default reducer;