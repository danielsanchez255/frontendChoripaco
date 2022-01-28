import React, { useState, useEffect } from 'react';

//Components
import Navbar from '../../components/Navbar/Navbar.jsx';
import Form from '../../components/Form/Form.jsx';
import Products from '../../components/Products/Products.jsx';

//Redux
import { getProducts } from '../../services/actions/products.js'
import { useDispatch } from 'react-redux';

const Home = () =>  {

    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [])

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mt-5">
                        <Products setCurrentId={setCurrentId} />
                    </div>
                    <div className="col-md-4 mt-5">
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </div>
                </div>
            </div>
            
        </div>
    );

}

export default Home;