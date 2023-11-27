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