import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//Components


//Redux
import { useDispatch } from 'react-redux';
import { signin } from '../../../services/actions/auth.js';

import './LoginAdmin.css';

const LoginAdmin = () =>  {

    //const [currentId, setCurrentId] = useState(null);
    const [formData, setFormData] = useState({
        email: '', password: ''
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log("Data login: ", formData.email, ", ", formData.password);
        dispatch(signin(formData, navigate));
    }

    return (
        <>
            <section className="vh-100 background-login">
                <div className="container-fluid h-custom text-white">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-8 col-lg-6 col-xl-4">
                            <form onSubmit={handleSubmit}>
                                <div className="divider d-flex align-items-center my-4">
                                    <h4 className="text-center fw-bold mx-3 mb-0 text-white">Entrada al administrador</h4>
                                </div>

                                <div className="form-outline mb-4">
                                    <input type="email" name="email" className="form-field" placeholder="Ingrese el email" onChange={handleChange} />
                                    <label className="form-label mt-1" htmlFor="form3Example3">Email inválido</label>
                                </div>

                                <div className="form-outline mb-3">
                                    <input type="password" name="password" className="form-field" placeholder="Ingrese la contraseña" onChange={handleChange} />
                                    <label className="form-label mt-1" htmlFor="form3Example4">Contraseña inválida</label>
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="submit" className="btn btn-login btn-lg" style={{paddingLeft: '2.5rem', paddingRight: '2.5rem'}}>Ingresar</button>
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