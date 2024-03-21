import { ActionTypes } from "../actions/action-types";

const initialProducts = {
    products : [],
}

const initialProductCart = {
    cartProduct : []
}

const product_category = {
    categories: []
}

const user_address = {
    user_address: []
}

const selected_checkout_products = {
    checkout_products : []
}

export const productReducer = (state=initialProducts, {type , payload})=>{
    switch (type) {
        case ActionTypes.SET_PRODUCT:
            return { ...state, products : payload}
        default:
            return state;
    }
}

export const selectedProductReducer = (state=initialProducts, {type, payload})=>{
    switch (type) {
        case ActionTypes.SET_SELECTED_PRODUCTS:
            return { ...state, ...payload }
        case ActionTypes.SET_REMOVED_PRODUCTS:
            return {}    
        default:
            return state;
    }
}

// add to cart 
export const productCartReducer = (state=initialProductCart, {type, payload}) => {
    switch (type) {
        case ActionTypes.ADD_TO_CART:
            return { ...state, cartProduct : [...state.cartProduct, payload] }
        case ActionTypes.REMOVE_FROM_CART:
            const updateCart = state.cartProduct.filter((product)=> product.id !== payload.id)
            return { ...state, cartProduct : updateCart }   
        case ActionTypes.REMOVE_ALL_CART_PRODUCT:
            console.log("empty now")
            return {...state, cartProduct : []}     
        default:
            return state;
    }
}

// product categories
export const productCategories = (state=product_category, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCT_CATEGORIES:
            return { ... state, categories : payload }
    
        default:
            return state;
    }
}

// user address 
export const userAddressCheckout = (state = user_address, {type , payload}) =>{
    switch (type) {
        case ActionTypes.ADD_USER_ADDRESS:
            return { ...state, user_address : [...state.user_address, payload] }
        default:
            return state;
    }
}

// checkout products 
export const checkOutProducts = (state=selected_checkout_products, { type , payload }) =>{
    switch (type) {
        case ActionTypes.SELECTED_CHECKOUT_PRODUCT:
            return { ...state, checkout_products : [ ...state.checkout_products, payload ] }
        case ActionTypes.DELETE_CHECKOUT_PRODUCT:
                return { ...state, checkout_products : [] }
    
        default:
            return state;
    }
}