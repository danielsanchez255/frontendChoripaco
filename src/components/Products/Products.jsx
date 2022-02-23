import React from 'react';
import { useSelector } from 'react-redux';
import Product from './Product/Product.jsx';
import './Products.css';

const Products = ({ setCurrentId }) => {
    const products = useSelector((state) => state.products);
    return (
        !products.length ? <h1>No hay recursos</h1> : (
            <div className="layoutProducts">
                <div className="container">
                    <div className="row pt-5 pb-4">
                        {products.map((product) => (
                            <div className="col-md-4">
                                <Product product={product} setCurrentId={setCurrentId} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )        
    );
}

export default Products;