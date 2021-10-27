
import productService from '../../services/productService.js';

export const LIST_PRODUCTS = "LIST_PRODUCTS";
export const LIST_PRODUCTS_SUCCESS = "LIST_PRODUCTS_SUCCESS";
export const ADD_PRODUCT_CART = "ADD_PRODUCT_CART";

export const listProductsSuccess = (payload) => ({
    type: LIST_PRODUCTS_SUCCESS,
    payload: payload
});

export const addProductCart = (payload) => ({
    type: ADD_PRODUCT_CART,
    payload: payload
});

export const listProducts = (filter) => {

    return async function  (dispatch) {

        let drinks = await productService.getAllProducts(filter); 

        drinks.forEach(drink => {
            let min = 1;
            let max = 100;
            drink.price = parseFloat((Math.random() * (max - min + 1)) + min).toFixed(2);
        })

        dispatch(listProductsSuccess(drinks));
    }
};