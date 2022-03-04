import { combineReducers } from 'redux';

import auth from './auth.js';
import products from './products.js';
import categories from './categories.js';

export default combineReducers({ 
    auth: auth,
    products: products, 
    categories: categories 
});