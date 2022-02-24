import React, { useState, useEffect } from 'react';
import background from '../../assets/img/cafe.png';
import './Shop.css';

//Components
import Header from '../../components/Header/Header.jsx';
import Products from '../../components/Products/Products';

//Redux
import { getProducts } from '../../services/actions/products.js';
import { useDispatch } from 'react-redux';

const Shop = () =>  {

    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [])

    return (
        <>
            <div style={{ backgroundImage: 'url(' + background + ')', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
                <Header />
                <div className="content">
                    <Products administrator={false} setCurrentId={setCurrentId} />
                </div>
            </div>       
        </>
    );

}

export default Shop;