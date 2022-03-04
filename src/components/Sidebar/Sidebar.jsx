import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/img/logo_crema.png';

import { useDispatch } from 'react-redux';

import "./Sidebar.css";

const Sidebar = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        dispatch({ type: 'LOGOUT' });

        navigate('/');

        setUser(null);
    }

    return (
        <>
            <div className="wrapper">
                <nav id="sidebar">
                    <div className="sidebar-header">
                        <img className="headerImage" src={logo} alt="logo" />
                    </div>

                    <ul className="list-unstyled components">
                        <p>Administrador</p>
                        <li>
                            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Productos</a>
                            <ul className="collapse list-unstyled" id="homeSubmenu">
                                <li className="active">
                                    <a href="#">Producto</a>
                                </li>
                                <li>
                                    <a href="#">Categoría</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Pedidos</a>
                        </li>
                        <li>
                            <a href="#">Usuarios</a>
                        </li>
                        {/* <li>
                            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pages</a>
                            <ul className="collapse list-unstyled" id="pageSubmenu">
                                <li>
                                    <a href="#">Page 1</a>
                                </li>
                                <li>
                                    <a href="#">Page 2</a>
                                </li>
                                <li>
                                    <a href="#">Page 3</a>
                                </li>
                            </ul>
                        </li> */}
                    </ul>
                    <hr/>
                    <ul className="list-unstyled CTAs">
                        <li>
                            <a href="" type="button" className="article" onClick={logout}>Cerrar sesión</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Sidebar;