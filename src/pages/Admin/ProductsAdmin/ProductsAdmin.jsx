import React, { useState, useEffect } from 'react';

//Components
import ProductForm from '../../../components/ProductForm/ProductForm.jsx';
import Products from '../../../components/Products/Products.jsx';
import Sidebar from '../../../components/Sidebar/Sidebar.jsx';

//Redux
import { getProducts } from '../../../services/actions/products.js';
import { useDispatch } from 'react-redux';

const ProductsAdmin = () =>  {

    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [])

    return (
        <>
            <Sidebar />
            <div className="container">
                <div className="row">
                    <div className="col-md-7 mt-5 offset-md-2">
                        <Products setCurrentId={setCurrentId} />
                    </div>
                    <div className="col-md-3 mt-5">
                        <ProductForm currentId={currentId} setCurrentId={setCurrentId} />
                    </div>
                </div>
            </div>
            
        </>
    );

}

export default ProductsAdmin;