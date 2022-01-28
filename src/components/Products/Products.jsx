import React from 'react';
import { useSelector } from 'react-redux';
import Product from './Product/Product.jsx';

const Products = ({ setCurrentId }) => {
    const products = useSelector((state) => state.products);
    console.log(products);
    return (
        !products.length ? <h1>No hay recursos</h1> : (
            <div className="container">
                <div className="row">
                    {products.map((product) => (
                        <div className="col-md-4">
                            <Product product={product} setCurrentId={setCurrentId} />
                        </div>
                    ))}
                </div>
            </div>
        )        
    );
}

export default Products;