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

    const handleSubmit = (e) => {
        e.preventDefault();

        
    }

    return (
        <>
            <section className="vh-100 background-login">
                <div className="container-fluid h-custom text-white">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-8 col-lg-6 col-xl-4">
                            <form>
                                <div className="divider d-flex align-items-center my-4">
                                    <h4 className="text-center fw-bold mx-3 mb-0 text-white">Entrada al administrador</h4>
                                </div>

                                <div className="form-outline mb-4">
                                    <input type="email" id="form3Example3" className="form-field" placeholder="Ingrese el email" />
                                    <label className="form-label mt-1" for="form3Example3">Email inválido</label>
                                </div>

                                <div className="form-outline mb-3">
                                    <input type="password" id="form3Example4" className="form-field" placeholder="Ingrese la contraseña" />
                                    <label className="form-label mt-1" for="form3Example4">Contraseña inválida</label>
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="button" className="btn btn-login btn-lg" style={{paddingLeft: '2.5rem', paddingRight: '2.5rem'}}>Ingresar</button>
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