import React, { useState, useEffect } from 'react';

//Components


//Redux
import { getProducts } from '../../../services/actions/products.js';
import { useDispatch } from 'react-redux';

import './LoginAdmin.css';

const LoginAdmin = () =>  {

    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [])

    return (
        <>
            <section className="vh-100 background-login">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-8 col-lg-6 col-xl-4">
                            <form>
                                <div className="divider d-flex align-items-center my-4">
                                    <p className="text-center text-white fw-bold mx-3 mb-0">Entrar al administrador</p>
                                </div>

                                <div className="form-outline mb-4">
                                    <input type="email" id="form3Example3" className="form-field"
                                    placeholder="Enter a valid email address" />
                                    <label className="form-label" for="form3Example3">Email address</label>
                                </div>

                                <div className="form-outline mb-3">
                                    <input type="password" id="form3Example4" className="form-field"
                                    placeholder="Enter password" />
                                    <label className="form-label" for="form3Example4">Password</label>
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                        <label className="form-check-label" for="form2Example3">
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="#!" className="text-body">Forgot password?</a>
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="button" className="btn btn-primary btn-lg" style={{paddingLeft: '2.5rem', paddingRight: '2.5rem'}}>Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>           
        </>
    );

}

export default LoginAdmin;