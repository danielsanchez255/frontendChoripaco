import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/img/logo_crema.png';
import decode from 'jwt-decode';

import Swal from "sweetalert2"; 

import { useDispatch } from 'react-redux';

import "./Sidebar.css";

const Sidebar = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {

        const token = user?.token;
        if (token != undefined || token != null) {
            if (token) {
                const decodedToken = decode(token);

                if (decodedToken.exp * 1000 < new Date().getTime()) logout();
            }
        } else {
            navigate('/administrador/entrar');
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
    });

    const logout = () => {
        Swal.fire({
            title: 'Cerrar sesión',
            text: '¿Deseas cerrar sesión?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#f04e39',
            cancelButtonColor: '#181e1c',
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {        
                dispatch({ type: 'LOGOUT' });
                navigate('/');
                setUser(null);
            }
        });
    }

    return (
        <>
            <div className="wrapper">
                <button type="button" id="sidebarCollapse" className="btn sidebarCollapse mb-5">
                    <i class="fa fa-bars" aria-hidden="true"></i>
                </button>
                <nav id="sidebar">
                    <div className="sidebar-header">
                        <img className="headerImage" src={ logo } srcSet={ logo } alt="logo" />
                    </div>

                    <ul className="list-unstyled components">
                        <p>Administrador</p>
                        <li>
                            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Productos</a>
                            <ul className="collapse list-unstyled" id="homeSubmenu">
                                <li className="active">
                                    <a href="/administrador/productos">Producto</a>
                                </li>
                                <li>
                                    <a href="/administrador/categorias">Categoría</a>
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
                            <a type="button" className="article" onClick={logout}>Cerrar sesión</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Sidebar;