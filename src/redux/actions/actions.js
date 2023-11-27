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

export {setProducts, selectedProducts, deleteProduct, addProductToCart, productCategories};
