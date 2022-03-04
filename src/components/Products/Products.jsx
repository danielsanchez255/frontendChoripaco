import React from 'react';
import { useSelector } from 'react-redux';
import Product from './Product/Product.jsx';
import './Products.css';

const Products = ({ administrator, setCurrentId }) => {
    const products = useSelector((state) => state.products);
    return (
        !products.length ? <div className="d-flex justify-content-center">
                                <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                                </div>
                            </div> 
                        : (
                            <div className="layoutProducts">
                                <div className="container">
                                    <div className="row mt-3">
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