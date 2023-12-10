import { checkOutProducts, productCartReducer, productCategories, productReducer, selectedProductReducer, userAddressCheckout } from './reducer';
import {combineReducers} from 'redux'

const reducer = combineReducers({
    allProducts : productReducer,
    product : selectedProductReducer,
    cartInProducts : productCartReducer,
    productCategories : productCategories,
    addUserAddress : userAddressCheckout,
    checkoutProducts : checkOutProducts
})

export default reducer;