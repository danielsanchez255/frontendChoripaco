import { combineReducers } from 'redux';

import auth from './auth.js';
import cart from './cart.js';
import products from './products.js';
import categories from './categories.js';

export default combineReducers({ 
    auth: auth,
    cart: cart,
    products: products, 
    categories: categories 
});