import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import productReducer from '../store/reducers/ProductReducer';

export default createStore(productReducer, applyMiddleware(thunk));


