import React from 'react';
import { useSelector } from 'react-redux';
import Product from './Product/Product.jsx';
import './Products.css';

const Products = ({ administrator, setCurrentId }) => {
    const products = useSelector((state) => state.products);
    return (
        !products.length ? <h1>No hay recursos</h1> : (
            <div className="layoutProducts">
                <div className="container">
                    <div className="row">
                        {products.map((product) => (
                            <div key={product._id} className="col-6 col-sm-6 col-md-4">
                                <Product administrator={administrator} product={product} setCurrentId={setCurrentId} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )        
    );
}

export default Products;