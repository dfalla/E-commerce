import { LIST_PRODUCTS_SUCCESS, ADD_PRODUCT_CART } from '../actions/ProductActions';

const initialState = {
      products: [],
      productsInCart: []
};

const productReducer = (state = initialState, { type, payload }) => {

      switch (type) {
            case LIST_PRODUCTS_SUCCESS:
                  return {
                        ...state,
                        products: [...payload]
                  }
            case ADD_PRODUCT_CART:
                  return {
                        ...state,
                        productsInCart: [...state.productsInCart, { ...payload }]
                  }
            default:
                  return state
      }
};


export default productReducer;