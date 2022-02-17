import { combineReducers } from 'redux';

import products from './products.js';
import categories from './categories.js';

export default combineReducers({ 
    products: products, 
    categories: categories 
});