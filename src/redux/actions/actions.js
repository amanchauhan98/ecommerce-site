// HANDLE ALL ACTIONS 
import { ActionTypes } from "./action-types"
const setProducts = (products) => {
    return {
        type : ActionTypes.SET_PRODUCT,
        payload : products
    }
}

const selectedProducts = (products)=>{
    return {
        type : ActionTypes.SET_SELECTED_PRODUCTS,
        payload: products
    }
}

const deleteProduct = (products) => {
    return {
        type : ActionTypes.SET_REMOVED_PRODUCTS,
    }
}

const addProductToCart = (product) => {
    return {
        type : ActionTypes.ADD_TO_CART,
        payload : product
    }
}

const productCategories = (categories) => {
    return {
        type : ActionTypes.SET_PRODUCT_CATEGORIES,
        payload : categories,
    }
}

const deleteProductToCart = (product) => {
    return {
        type : ActionTypes.REMOVE_FROM_CART,
        payload : product
    }
}

const deleteAllCartProduct = () => {
    return{
        type : ActionTypes.REMOVE_ALL_CART_PRODUCT,
    }
}

const addUserAddress = (user_data) => {
    return {
        type : ActionTypes.ADD_USER_ADDRESS,
        payload : user_data
    }
}

// checkout product
const addCheckoutProducts = (products) => {
    return {
        type : ActionTypes.SELECTED_CHECKOUT_PRODUCT,
        payload : products
    }
}

export {setProducts, selectedProducts, deleteProduct, addProductToCart, productCategories, deleteProductToCart, deleteAllCartProduct, addUserAddress, addCheckoutProducts};
 