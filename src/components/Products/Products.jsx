import React from 'react';
import { useSelector } from 'react-redux';
import Product from './Product/Product.jsx';

const Products = () => {
    const products = useSelector((state) => state.products)
    return (
        <div>
            <h1>Productos</h1>
            <Product />
        </div>
    );
}

export default Products;