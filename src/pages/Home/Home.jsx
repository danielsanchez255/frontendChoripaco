import React, { useEffect } from 'react';

//Components
import Navbar from '../../components/Navbar/Navbar.jsx';
import Form from '../../components/Form/Form.jsx';
import Products from '../../components/Products/Products.jsx';

//Redux
import { getProducts } from '../../services/actions/products.js'
import { useDispatch } from 'react-redux';

const Home = () =>  {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [])

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5">
                        <Products />
                    </div>
                    <div className="col-md-6 mt-5">
                        <Form />
                    </div>
                </div>
            </div>
            
        </div>
    );

}

export default Home;